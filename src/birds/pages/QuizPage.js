import { useState, Fragment, useContext, useEffect } from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as api from "../api";

import {
    MollyThemeContext,
    Typography,
    breakpoints,
    constants,
    CloseIcon,
    CaretIcon,
    Checkbox,
    Range,
    RadioButtonGroup,
    Button,
    TextInput,
} from "../../molly-ui";
import { distinct } from "../data/helpers";
import BirdListing from "../components/BirdListing";
import BirdDrawer from "../components/BirdDrawer";
import Loader from "../components/Loader";
import BirdDataContext from "../data/BirdDataContext";
import { backendServiceHost } from "../api";

export const QuizPage = () => {
    const theme = useContext(MollyThemeContext);
    const [selectedBirds, setSelectedBirds] = useState([]);
    const [numBirds, setNumBirds] = useState(0);
    const [useOpenAnswer, setUseOpenAnswer] = useState(false);
    const [quizStarted, setQuizStarted] = useState(false);
    const [quizResult, setQuizResult] = useState([]);

    useEffect(() => {
        setNumBirds(selectedBirds.length);
    }, [selectedBirds]);

    const reset = () => {
        setQuizStarted(false);
        setQuizResult([]);
    };

    if (quizResult.length > 0) {
        return (
            <div
                css={{
                    background: theme.colors[constants.COLORS.WHITE].base,
                    padding: theme.baseFontSize,
                    textAlign: "center",
                }}
            >
                <Typography.H4>Resultat</Typography.H4>
                <Typography.Body>
                    Du fick {quizResult[0]} rätt på {quizResult[1]}{" "}
                    {quizResult[1] === 1 ? "fågel" : "fåglar"}.
                </Typography.Body>
                <Button type="primary" onClick={reset}>
                    Börja om
                </Button>
            </div>
        );
    } else if (quizStarted) {
        const randomizedBirds = selectedBirds
            .sort(() => 0.5 - Math.random())
            .slice(0, numBirds);

        return (
            <div
                css={{
                    background: theme.colors[constants.COLORS.WHITE].base,
                    padding: theme.baseFontSize,
                    textAlign: "center",
                }}
            >
                <Quiz
                    birds={randomizedBirds}
                    openAnswer={useOpenAnswer}
                    setQuizResult={setQuizResult}
                />
            </div>
        );
    } else {
        return (
            <div
                css={{
                    background: theme.colors[constants.COLORS.WHITE].base,
                    padding: theme.baseFontSize,
                    textAlign: "left",
                }}
            >
                <SelectBirds setSelectedBirds={setSelectedBirds} />
                <div
                    css={{
                        marginTop: theme.baseFontSize,
                        marginBottom: theme.baseFontSize,
                        paddingBottom: theme.baseFontSize,
                        borderBottom: `1px solid ${
                            theme.colors[constants.COLORS.LIGHT_GREY].base
                        }`,
                    }}
                >
                    {selectedBirds.length > 0 &&
                        `${
                            selectedBirds
                                .map((bird) => bird.genus)
                                .filter(distinct).length
                        } släkten valda.`}
                </div>
                <div
                    css={{
                        marginTop: theme.baseFontSize,
                        marginBottom: theme.baseFontSize,
                        paddingBottom: theme.baseFontSize,
                        borderBottom: `1px solid ${
                            theme.colors[constants.COLORS.LIGHT_GREY].base
                        }`,
                    }}
                >
                    <Typography.Body>Välj antal fåglar</Typography.Body>
                    <Range
                        value={numBirds}
                        onChange={(e) => setNumBirds(e.target.value)}
                        max={selectedBirds.length}
                        min={1}
                        disabled={selectedBirds.length === 0}
                    />
                </div>
                <div
                    css={{
                        marginTop: theme.baseFontSize,
                        marginBottom: theme.baseFontSize,
                        paddingBottom: theme.baseFontSize,
                        borderBottom: `1px solid ${
                            theme.colors[constants.COLORS.LIGHT_GREY].base
                        }`,
                    }}
                >
                    <Typography.Body>Använd Svarsalternativ</Typography.Body>
                    <RadioButtonGroup
                        options={["Ja", "Nej"]}
                        name="use-open-answer"
                        value={useOpenAnswer ? "Nej" : "Ja"}
                        onChange={(e) =>
                            e.target.value === "Ja"
                                ? setUseOpenAnswer(false)
                                : setUseOpenAnswer(true)
                        }
                        disabled={selectedBirds.length === 0}
                    />
                </div>
                <div
                    css={{
                        width: "100%",
                        textAlign: "center",
                        ...breakpoints.tablet({
                            textAlign: "left",
                        }),
                    }}
                >
                    <Button
                        type={constants.TYPES.PRIMARY}
                        disabled={selectedBirds.length === 0}
                        onClick={() => setQuizStarted(true)}
                    >
                        Starta quiz
                    </Button>
                </div>
            </div>
        );
    }
};

const SelectBirds = ({ setSelectedBirds }) => {
    const [open, setOpen] = useState(false);
    const [openOrders, setOpenOrders] = useState(new Set());
    const [openFamilies, setOpenFamilies] = useState(new Set());
    const [openSubfamilies, setOpenSubfamilies] = useState(new Set());

    const [selected, setSelected] = useState([]);

    const theme = useContext(MollyThemeContext);
    const { data, isLoading } = useContext(BirdDataContext);

    useEffect(() => {
        if (isLoading) return;

        setSelectedBirds(
            data.birds.filter((bird) =>
                selected.some((el) => el.split("_")[2] == bird.genus.id)
            )
        );
    }, [selected]);

    if (isLoading) {
        return null;
    }

    const isChecked = (type, id) => {
        if (type === "order") {
            return selected.some((el) => el.split("_")[0] == id);
        } else if (type === "family") {
            return selected.some((el) => el.split("_")[1] == id);
        } else if (type === "genus") {
            return selected.some((el) => el.split("_")[2] == id);
        }
    };

    const toggleChecked = (type, orderId, familyId, genusId) => {
        let els = [];
        let add;

        if (type === "order") {
            const order = data.orders.find((o) => o.id === orderId);
            order.families.forEach((family) => {
                family.genera.forEach((genus) => {
                    els.push(`${orderId}_${family.id}_${genus.id}`);
                });
            });
            add = !isChecked("order", orderId);
        } else if (type === "family") {
            const family = Object.values(data.families).find(
                (f) => f.id === familyId
            );
            family.genera.forEach((genus) => {
                els.push(`${orderId}_${familyId}_${genus.id}`);
            });
            add = !isChecked("family", familyId);
        } else if (type === "genus") {
            els.push(`${orderId}_${familyId}_${genusId}`);
            add = !isChecked("genus", genusId);
        }

        let modified = [...selected];
        els.forEach((currEl) => {
            let exists = modified.includes(currEl);

            if (exists && !add) {
                modified = modified.filter((el) => el !== currEl);
            } else if (add && !exists) {
                modified = [...modified, currEl];
            }
        });

        setSelected(modified);
    };

    const toggleOpen = (slug, set, toggleFn) => {
        const modifiedSet = new Set(set);
        if (modifiedSet.has(slug)) {
            modifiedSet.delete(slug);
        } else {
            modifiedSet.add(slug);
        }
        toggleFn(modifiedSet);
    };

    return (
        <div>
            <div
                onClick={() => setOpen(!open)}
                css={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                }}
            >
                <Typography.Body>
                    Välj vilka grupper av fåglar som ska inkluderas
                </Typography.Body>
                <CaretIcon
                    css={{
                        width: "18px",
                        stroke: theme.colors[constants.COLORS.BLACK].base,
                        transform: open && "rotate(180deg)",
                        transition: "transform 0.2s linear",
                    }}
                />
            </div>
            {open && (
                <div>
                    {data.orders.map((order) => (
                        <Item
                            {...order}
                            level={0}
                            isOpen={openOrders.has(order.slug)}
                            key={order.slug}
                            toggleOpen={() =>
                                toggleOpen(
                                    order.slug,
                                    openOrders,
                                    setOpenOrders
                                )
                            }
                            toggleChecked={() =>
                                toggleChecked("order", order.id)
                            }
                            checked={isChecked("order", order.id)}
                        >
                            {openOrders.has(order.slug) &&
                                order.families.map((family) => (
                                    <Item
                                        {...family}
                                        level={1}
                                        isOpen={openFamilies.has(family.slug)}
                                        key={family.slug}
                                        toggleOpen={() =>
                                            toggleOpen(
                                                family.slug,
                                                openFamilies,
                                                setOpenFamilies
                                            )
                                        }
                                        toggleChecked={() =>
                                            toggleChecked(
                                                "family",
                                                order.id,
                                                family.id
                                            )
                                        }
                                        checked={isChecked("family", family.id)}
                                    >
                                        {openFamilies.has(family.slug) &&
                                            family.genera.map((genus) => (
                                                <Item
                                                    {...genus}
                                                    level={2}
                                                    key={genus.slug}
                                                    toggleChecked={() =>
                                                        toggleChecked(
                                                            "genus",
                                                            order.id,
                                                            family.id,
                                                            genus.id
                                                        )
                                                    }
                                                    checked={isChecked(
                                                        "genus",
                                                        genus.id
                                                    )}
                                                />
                                            ))}
                                    </Item>
                                ))}
                        </Item>
                    ))}
                </div>
            )}
        </div>
    );
};

const Item = ({
    name_sv,
    name_latin,
    image,
    level,
    children,
    isOpen,
    toggleOpen,
    checked,
    toggleChecked,
    ...rest
}) => {
    const theme = useContext(MollyThemeContext);
    return (
        <div css={{ display: "flex", alignItems: "flex-start" }} {...rest}>
            <div
                css={{
                    marginTop:
                        level === 0
                            ? theme.baseFontSize * 1.5
                            : theme.baseFontSize,
                    marginRight: theme.baseFontSize,
                }}
            >
                <Checkbox checked={checked} onChange={toggleChecked} />
            </div>
            <div css={{ flexGrow: 1 }}>
                <BirdListing
                    name_sv={name_sv}
                    name_latin={name_latin}
                    onClick={toggleOpen}
                    fontStyles={{
                        fontSize: theme.baseFontSize - level,
                        fontWeight: level === 0 && 500,
                        fontStyle: level === 2 && "italic",
                    }}
                    hasBorder={level === 0}
                    caretDirection={level === 2 ? "" : isOpen ? "up" : "down"}
                >
                    {isOpen && children}
                </BirdListing>
            </div>
        </div>
    );
};

const Quiz = ({ birds, openAnswer, setQuizResult }) => {
    const [images, setImages] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentInput, setCurrentInput] = useState("");
    const [currentAlternatives, setCurrentAlternatives] = useState([]);
    const [inputValid, setInputValid] = useState(false);
    const [inputError, setInputError] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const theme = useContext(MollyThemeContext);

    useEffect(() => {
        const imagesTmp = birds.map((bird, i) => {
            const image = new Image();
            const randomImageSrc =
                backendServiceHost +
                birds[i].images[
                    Math.floor(Math.random() * birds[i].images.length)
                ].path;
            if (i === 0) {
                image.onload = () => setIsLoading(false);
            }
            image.src = randomImageSrc;
            return image;
        });

        setImages(imagesTmp);
    }, []);

    useEffect(() => {
        const newBird = async () => {
            const birdAlternatives = await getBirdAlternatives();
            setCurrentAlternatives(birdAlternatives);
        };
        newBird();
        setCurrentInput("");
        setInputValid(false);
        setInputError(false);
    }, [currentIndex]);

    const getBirdAlternatives = async () => {
        const currentBird = birds[currentIndex];
        const { data: relatedBirds } = await api.get(
            `/birds/${currentBird.id}/related?size=2`
        );
        return [
            ...relatedBirds.map((bird) => bird.name_sv),
            currentBird.name_sv,
        ].sort(() => 0.5 - Math.random());
    };

    const getRandom = (arr, n) => {
        const arrCopy = arr.slice();
        const indexOne = Math.floor(Math.random() * arrCopy.length);
        const first = arrCopy[indexOne];
        if (n === 1) return first;
        arrCopy.splice(indexOne, 1);
        const second = arrCopy[Math.floor(Math.random() * arrCopy.length)];
        return [first, second];
    };

    const onSubmit = () => {
        if (inputValid || inputError) {
            if (currentIndex === birds.length - 1) {
                setQuizResult([answers.filter(Boolean).length, birds.length]);
            } else {
                setCurrentIndex(currentIndex + 1);
            }
            return;
        }

        const answersCopy = answers.slice();
        if (
            currentInput.toLowerCase() ===
            birds[currentIndex].name_sv.toLowerCase()
        ) {
            setInputValid(true);
            answersCopy.push(true);
        } else {
            setInputError(true);
            answersCopy.push(false);
        }
        setAnswers(answersCopy);
    };
    return (
        <div>
            <BirdDrawer
                bird={showDrawer ? birds[currentIndex] : {}}
                onClose={() => setShowDrawer(false)}
            />
            {isLoading && <Loader />}
            {images.length > 0 && !isLoading && (
                <div>
                    <div
                        css={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            marginBottom: theme.baseFontSize,
                            marginTop: theme.baseFontSize,
                        }}
                    >
                        {birds.map((_, i) => (
                            <div
                                key={i}
                                css={{
                                    backgroundColor:
                                        answers.length < i + 1
                                            ? theme.colors[
                                                  constants.COLORS.DISABLED_GREY
                                              ].base
                                            : theme.colors[
                                                  answers[i]
                                                      ? constants.COLORS.SUCCESS
                                                      : constants.COLORS.FAILURE
                                              ].base,
                                    width: "10px",
                                    height: "10px",
                                    margin: "2px",
                                }}
                            ></div>
                        ))}
                    </div>
                    <img
                        src={images[currentIndex].src}
                        alt={birds[currentIndex].name_latin}
                        css={{ maxWidth: "100%", width: "400px" }}
                    />
                    <div
                        css={{
                            marginBottom: theme.baseFontSize,
                            width: "100%",
                            maxWidth: "400px",
                            margin: "auto",
                        }}
                    >
                        {openAnswer ? (
                            <div>
                                <TextInput
                                    value={currentInput}
                                    onChange={(e) =>
                                        setCurrentInput(e.target.value)
                                    }
                                    disabled={inputError || inputValid}
                                />
                            </div>
                        ) : (
                            <div css={{ margin: "auto", width: "fit-content" }}>
                                <RadioButtonGroup
                                    options={currentAlternatives}
                                    name="bird-alternatives"
                                    value={currentInput}
                                    onChange={(e) =>
                                        setCurrentInput(e.target.value)
                                    }
                                    disabled={inputError || inputValid}
                                />
                            </div>
                        )}
                    </div>
                    <div
                        css={{
                            textAlign: "center",
                            margin: `${theme.baseFontSize}px auto`,
                        }}
                    >
                        {inputValid && (
                            <Typography.Body color={constants.COLORS.SUCCESS}>
                                Rätt svar!
                            </Typography.Body>
                        )}
                        {inputError && (
                            <div>
                                <Typography.Body
                                    color={constants.COLORS.FAILURE}
                                >
                                    Fel, rätt svar var{" "}
                                    {birds[currentIndex].name_sv}.
                                </Typography.Body>
                                <Typography.Body
                                    css={{
                                        textDecoration: "underline",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => setShowDrawer(true)}
                                >
                                    Se mer om fågeln
                                </Typography.Body>
                            </div>
                        )}
                    </div>
                    <Button
                        type={inputValid || inputError ? "general" : "primary"}
                        onClick={onSubmit}
                    >
                        {inputValid || inputError ? "Nästa" : "Rätta"}
                    </Button>
                </div>
            )}
        </div>
    );
};

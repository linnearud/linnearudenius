import { useState, useEffect, useContext } from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { birds } from "../birds";
import { Link, useHistory } from "react-router-dom";
import {
    MollyThemeContext,
    Typography,
    constants,
    TextInput,
    RadioButtonGroup,
    Button,
} from "../../molly-ui";

const RunQuiz = ({ group, numBirds, openAnswer }) => {
    const [quizBirds, setQuizBirds] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [currentInput, setCurrentInput] = useState("");
    const [currentAlternatives, setCurrentAlternatives] = useState([]);
    const [inputValid, setInputValid] = useState(false);
    const [inputError, setInputError] = useState(false);
    const theme = useContext(MollyThemeContext);
    const history = useHistory();

    useEffect(() => {
        const allBirds =
            Number(group) === -1
                ? birds.reduce((res, item) => {
                      const itemBirds = item.birds.map((bird) => ({
                          ...bird,
                          groupId: item.groupId,
                      }));
                      res = res.concat(itemBirds);
                      return res;
                  }, [])
                : birds
                      .find((g) => g.groupId === Number(group))
                      .birds.map((bird) => ({
                          ...bird,
                          groupId: Number(group),
                      }));

        const randomBirds = allBirds
            .sort(() => 0.5 - Math.random())
            .slice(0, numBirds)
            .map((bird) => {
                const tmp = new Image();
                tmp.src =
                    bird.images[Math.floor(Math.random() * bird.images.length)];
                return {
                    ...bird,
                    image: tmp,
                };
            });

        setQuizBirds(randomBirds);
    }, [group, numBirds]);

    useEffect(() => {
        if (quizBirds.length) {
            setCurrentAlternatives(getBirdAlternatives());
        }
        setCurrentInput("");
        setInputValid(false);
        setInputError(false);
    }, [currentIndex, quizBirds]);

    const updateAnswers = (answer) => {
        const answersTmp = answers.slice();
        answersTmp.push(answer);
        setAnswers(answersTmp);
    };

    const getBirdAlternatives = () => {
        const allBirdNames = birds
            .find((g) => g.groupId === quizBirds[currentIndex].groupId)
            .birds.map((bird) => bird.name_sv);

        allBirdNames.splice(
            allBirdNames.findIndex(
                (birdName) => birdName === quizBirds[currentIndex].name_sv
            ),
            1
        );
        const indexOne = Math.floor(Math.random() * allBirdNames.length);
        const firstAlternative = allBirdNames[indexOne];
        allBirdNames.splice(indexOne, 1);
        
        return [
            firstAlternative,
            allBirdNames[Math.floor(Math.random() * allBirdNames.length)],
            quizBirds[currentIndex].name_sv,
        ].sort(() => 0.5 - Math.random());
    };

    const onSubmit = () => {
        if (inputValid || inputError) {
            if (currentIndex === numBirds - 1) {
                history.push("/birds/quiz/result", {
                    numBirds: numBirds,
                    correctAnswers: answers.filter(Boolean).length,
                });
            } else {
                setCurrentIndex(currentIndex + 1);
            }
            return;
        }

        if (
            currentInput.toLowerCase() ===
            quizBirds[currentIndex].name_sv.toLowerCase()
        ) {
            setInputValid(true);
            updateAnswers(true);
        } else {
            setInputError(true);
            updateAnswers(false);
        }
    };

    if (quizBirds.length > 0) {
        return (
            <div css={{ marginBottom: 4 * theme.baseFontSize, paddingTop: theme.baseFontSize }}>
                <Typography.H1 css={{ textAlign: "center" }}>
                    Quiz
                </Typography.H1>
                <div
                    css={{
                        width: "400px",
                        maxWidth: "100%",
                        margin: "auto",
                        marginBottom: theme.baseFontSize,
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    {quizBirds.map((_, i) => (
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
                                borderRadius: "5px",
                                margin: "2px",
                            }}
                        ></div>
                    ))}
                </div>
                <img
                    src={quizBirds[currentIndex].image.src}
                    alt={quizBirds[currentIndex].name_latin}
                    css={{ maxWidth: "100%", width: "400px" }}
                />
                <div
                    css={{
                        margin: `${theme.baseFontSize}px auto`,
                        width: "fit-content",
                    }}
                >
                    {openAnswer === "true" ? (
                        <div
                            css={{
                                width: "400px",
                                maxWidth: "100%",
                                margin: "auto",
                            }}
                        >
                            <TextInput
                                value={currentInput}
                                onChange={(e) =>
                                    setCurrentInput(e.target.value)
                                }
                                disabled={inputError || inputValid}
                            />
                        </div>
                    ) : (
                        <RadioButtonGroup
                            options={currentAlternatives}
                            name="bird-alternatives"
                            value={currentInput}
                            onChange={(e) => setCurrentInput(e.target.value)}
                            disabled={inputError || inputValid}
                        />
                    )}
                </div>
                <div
                    css={{
                        width: "400px",
                        textAlign: "center",
                        maxWidth: "100%",
                        margin: `${theme.baseFontSize}px auto`,
                    }}
                >
                    {inputValid && (
                        <Typography.Body color={constants.COLORS.SUCCESS}>
                            Rätt svar!
                        </Typography.Body>
                    )}
                    {inputError && (
                        <Typography.Body color={constants.COLORS.FAILURE}>
                            Fel svar. Rätt svar var{" "}
                            {quizBirds[currentIndex].name_sv}. Se mer om fågeln{" "}
                            <Link
                                css={{
                                    color:
                                        theme.colors[constants.COLORS.FAILURE]
                                            .base,
                                }}
                                target="_blank"
                                to={`/birds/${quizBirds[currentIndex].id}`}
                            >
                                här.
                            </Link>
                        </Typography.Body>
                    )}
                </div>
                <Button
                    type={inputValid || inputError ? "general" : "primary"}
                    onClick={onSubmit}
                >
                    {inputValid || inputError ? "Nästa" : "Rätta"}
                </Button>
            </div>
        );
    } else {
        return null;
    }
};

export default RunQuiz;

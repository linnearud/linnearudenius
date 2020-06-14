import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import {
    MollyThemeContext,
    Typography,
    Select,
    Range,
    RadioButtonGroup,
    Button,
} from "../../molly-ui";
import { birds } from "../birds";

const SetupQuiz = () => {
    const [selectedGroupOption, setSelectedGroupOption] = useState(-1);
    const [numBirds, setNumBirds] = useState(0);
    const [useOpenAnswer, setUseOpenAnswer] = useState(false);
    const theme = useContext(MollyThemeContext);
    const history = useHistory();

    const groupOptions = birds.reduce(
        (res, item) => {
            res[item.groupId] = item.group;
            return res;
        },
        { [-1]: "Alla grupper" }
    );

    useEffect(() => {
        setNumBirds(getMaximumBirds());
    }, [selectedGroupOption]);

    const handleStartQuiz = () => {
        history.push({
            pathname: "/birds/quiz/start",
            search: `?group=${selectedGroupOption}&numBirds=${numBirds}&openAnswer=${useOpenAnswer}`,
        });
    };

    const getMaximumBirds = () => {
        if (selectedGroupOption === -1) {
            return birds.reduce((res, item) => {
                res = res + item.birds.length;
                return res;
            }, 0);
        } else {
            return birds.find((group) => group.groupId === selectedGroupOption)
                .birds.length;
        }
    };

    return (
        <div css={{ textAlign: "left", maxWidth: "500px", margin: "auto", paddingTop: theme.baseFontSize }}>
            <Typography.H1 css={{ textAlign: "center" }}> Quiz </Typography.H1>
            <Typography.Body css={{ padding: `0 ${theme.baseFontSize}px` }}>
                Välj grupp
            </Typography.Body>
            <Select
                options={groupOptions}
                selected={selectedGroupOption}
                onChange={(e) => setSelectedGroupOption(e.target.value)}
            />
            <Typography.Body
                css={{
                    padding: `0 ${theme.baseFontSize}px`,
                    marginTop: 2 * theme.baseFontSize,
                }}
            >
                Antal Fåglar
            </Typography.Body>
            <Range
                value={numBirds}
                onChange={(e) => setNumBirds(e.target.value)}
                max={getMaximumBirds()}
                min={1}
            />
            <Typography.Body
                css={{
                    padding: `0 ${theme.baseFontSize}px`,
                    marginTop: 2 * theme.baseFontSize,
                }}
            >
                Använd Svarsalternativ
            </Typography.Body>
            <RadioButtonGroup
                options={["Ja", "Nej"]}
                name="use-open-answer"
                value={useOpenAnswer ? "Nej" : "Ja"}
                onChange={(e) =>
                    e.target.value === "Ja"
                        ? setUseOpenAnswer(false)
                        : setUseOpenAnswer(true)
                }
            />
            <div css={{ width: "100%", textAlign: "center" }}>
                <Button type="primary" onClick={handleStartQuiz}>
                    Starta Quiz
                </Button>
            </div>
        </div>
    );
};

export default SetupQuiz;

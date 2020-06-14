import { useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { MollyThemeContext, Typography, Button } from "../../molly-ui";

const QuizResult = () => {
    const location = useLocation();
    const history = useHistory();
    const theme = useContext(MollyThemeContext);

    if (
        !location.state ||
        location.state.correctAnswers === undefined ||
        !location.state.numBirds
    ) {
        return null;
    }

    return (
        <div css={{ margin: 4 * theme.baseFontSize, paddingTop: theme.baseFontSize }}>
            <Typography.H1 css={{ textAlign: "center" }}>
                Resultat
            </Typography.H1>
            <Typography.H4>
                Du fick {location.state.correctAnswers} rätt på{" "}
                {location.state.numBirds}{" "}
                {location.state.numBirds === 1 ? "fågel" : "fåglar"}.
            </Typography.H4>
            <Button type="primary" onClick={() => history.push("/birds/quiz")}>
                Börja om
            </Button>
        </div>
    );
};

export default QuizResult;

/** @jsx jsx */
import { jsx } from "@emotion/core";
import Golden from "./svgs/Golden";

const StartPage = () => (
    <div
        css={{
            background:
                "linear-gradient(90deg, rgba(241,241,212,1) 0%, rgba(244,244,226,0.9766281512605042) 49%, rgba(241,241,212,1) 100%)",
            minHeight: "100vh",
            minWidth: "100vw",
        }}
    >
        <div
            css={{
                overflow: "hidden",
                margin: "auto",
            }}
        >
            <Golden height="100vh" />
        </div>
    </div>
);

export default StartPage;

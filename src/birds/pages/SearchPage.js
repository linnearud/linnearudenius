import { useState, useContext, useEffect } from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useSearch } from "../search/SearchIndexContext";
import Loader from "../components/Loader";

import { MollyThemeContext, TextInput } from "../../molly-ui";
import BirdListing from "../components/BirdListing";
import BirdDrawer from "../components/BirdDrawer";

export const SearchPage = () => {
    const [inputValue, setInputValue] = useState("");
    const [selectedBird, setSelectedBird] = useState({});

    const theme = useContext(MollyThemeContext);
    const { isLoading, results, search, ready } = useSearch();

    useEffect(() => {
        search(inputValue);
    }, [inputValue]);

    if (!ready) {
        return null;
    }

    return (
        <div
            css={{
                background: theme.colors.white.base,
                padding: theme.baseFontSize,
                textAlign: "left",
            }}
        >
            <TextInput
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                label={"Vilken fågel letar du efter?"}
                onClearInput={() => setInputValue("")}
            />
            <BirdDrawer
                bird={selectedBird}
                onClose={() => setSelectedBird({})}
            />
            {isLoading && <Loader color={theme.colors.primary.base} />}
            {results.length > 0 &&
                !isLoading &&
                results.map((bird) => {
                    if (bird) {
                        return (
                            <BirdListing
                                {...bird}
                                key={bird.slug}
                                image_path={bird.images[0].path}
                                showImageOnMobile={true}
                                onClick={() => setSelectedBird(bird)}
                                hasBorder
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            {!isLoading &&
                results.length === 0 &&
                inputValue &&
                "Inga resultat"}
        </div>
    );
};

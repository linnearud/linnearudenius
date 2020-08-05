import { useState, Fragment, useContext, useEffect } from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { SearchIndexContext } from "../search/SearchIndexContext";
import Loader from "../components/Loader"
import useConstant from "use-constant";
import AwesomeDebouncePromise from "awesome-debounce-promise";

import {
    MollyThemeContext,
    Typography,
    breakpoints,
    constants,
    CloseIcon,
    CaretIcon,
    TextInput,
    Button,
} from "../../molly-ui";
import { ALL_BIRDS, distinct } from "../data/helpers";
import BirdListing from "../components/BirdListing";
import BirdDrawer from '../components/BirdDrawer'

export const SearchPage = () => {
    const [inputValue, setInputValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedBird, setSelectedBird] = useState({})
    const theme = useContext(MollyThemeContext);
    const index = useContext(SearchIndexContext);

    useEffect(() => {
        if (inputValue.length !== 0) {
            setIsLoading(true);
            debouncedSearchFunction(inputValue);
        } else {
            setSearchResults([]);
            setIsLoading(false)
        }
    }, [inputValue]);


    const search = (searchInput) => {
        let loadedImages = 0;
        const uniqueResults = index
            .search(searchInput)
            .map((res) => res.split("_")[0])
            .filter(distinct);
        const results = uniqueResults.map((res) => {
            return ALL_BIRDS.find((bird) => bird.id === res);
        });

        setIsLoading(false)
        setSearchResults(results);
    };

    const debouncedSearchFunction = useConstant(() =>
        AwesomeDebouncePromise(search, 300)
    );

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
                placeholder={"Vilken fågel letar du efter?"}
                                onClearInput={() => setInputValue('')}
            />
            <BirdDrawer bird={selectedBird} onClose={() => setSelectedBird({})} />
            {isLoading && (
                <Loader color={theme.colors.primary.base}/>
            )}
            {searchResults.length > 0 && !isLoading && searchResults
                .map((bird) => {
                    if (bird) {
                        return (
                            <BirdListing
                                {...bird}
                                key={bird.id}
                                image={bird.images[0]}
                                showImageOnMobile={true}
                                onClick={() => setSelectedBird(bird)}
                                hasBorder
                            />
                        );}
                })}
            {!isLoading && searchResults.length === 0 && inputValue && "Inga resultat"}
        </div>
    );
};

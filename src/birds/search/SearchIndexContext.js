import React, { useState, useContext } from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import BirdDataContext from "../data/BirdDataContext";
import flexsearch from "flexsearch";
import useConstant from "use-constant";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import { distinct } from "../data/helpers";

export const SearchIndexContext = React.createContext(null);

export const SearchIndexProvider = ({ children }) => {
    const { data, isLoading } = useContext(BirdDataContext);
    const index = flexsearch.create();

    if (!isLoading) {
        data.birds.forEach((bird) => {
            index.add(`${bird.slug}_sv`, bird.name_sv);
            index.add(`${bird.slug}_en`, bird.name_en);
            index.add(`${bird.slug}_latin`, bird.name_latin);
        });
    }

    return (
        <SearchIndexContext.Provider value={index}>
            {children}
        </SearchIndexContext.Provider>
    );
};

export const useSearch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);

    const index = useContext(SearchIndexContext);
    const { data, isLoading: isLoadingData } = useContext(BirdDataContext);

    const performSearch = (searchInput, index, birds) => {
        const uniqueResults = index
            .search(searchInput)
            .map((res) => res.split("_")[0])
            .filter(distinct);
        const results = uniqueResults.map((res) => {
            return birds.find((bird) => bird.slug === res);
        });

        setIsLoading(false);
        setResults(results);
    };

    const debouncedSearchFunction = useConstant(() =>
        AwesomeDebouncePromise(performSearch, 300)
    );

    const search = (input) => {
        if (input.length !== 0) {
            setIsLoading(true);
            debouncedSearchFunction(input, index, data.birds);
        } else {
            setResults([]);
            setIsLoading(false);
        }
    };

    return {
        isLoading: isLoading,
        results: results,
        search: search,
        ready: !isLoadingData,
    };
};

import { useState, Fragment, useContext, useEffect } from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { SearchIndexContext } from "../search/SearchIndexContext";
import Loader from "../components/Loader";
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
    ImageLoader,
} from "../../molly-ui";
import { ALL_BIRDS, distinct } from "../data/helpers";
import BirdListing from "../components/BirdListing";
import BirdDrawer from "../components/BirdDrawer";

export const ComparePage = () => {
    const [inputValue, setInputValue] = useState("");
    const [selectedBirds, setSelectedBirds] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showComparison, setShowComparison] = useState(false);
    const theme = useContext(MollyThemeContext);
    const index = useContext(SearchIndexContext);

    useEffect(() => {
        if (inputValue.length !== 0) {
            setIsLoading(true);
            debouncedSearchFunction(inputValue);
        } else {
            setSearchResults([]);
            setIsLoading(false);
        }
    }, [inputValue]);

    const selectBird = (bird) => {
        const selectedBirdsCopy = selectedBirds.slice();
        selectedBirdsCopy.push(bird);

        setInputValue("");
        setSearchResults([]);
        setSelectedBirds(selectedBirdsCopy);
    };

    const removeBird = (index) => {
        const selectedBirdsCopy = selectedBirds.slice();
        selectedBirdsCopy.splice(index, 1);
        setSelectedBirds(selectedBirdsCopy);
        setShowComparison(false);
    };

    const search = (searchInput) => {
        let loadedImages = 0;
        const uniqueResults = index
            .search(searchInput)
            .map((res) => res.split("_")[0])
            .filter(distinct);
        const results = uniqueResults.map((res) => {
            return ALL_BIRDS.find((bird) => bird.id === res);
        });

        setIsLoading(false);
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
            {selectedBirds.length > 0 && (
                <div
                    css={{
                        margin: theme.baseFontSize / 2,
                    }}
                >
                    <Typography.Body
                        css={{
                            padding: theme.baseFontSize / 4,
                            fontWeight: 600,
                        }}
                    >
                        Valda fåglar:
                    </Typography.Body>
                    {selectedBirds.map((bird, index) => (
                        <div css={{ margin: `${theme.baseFontSize / 2}px 0` }}>
                            <BirdListing
                                {...bird}
                                key={bird.id}
                                onClose={() => removeBird(index)}
                            />
                        </div>
                    ))}
                </div>
            )}
            {selectedBirds.length < 2 && (
                <TextInput
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    label={
                        selectedBirds.length === 1
                            ? `Vilken fågel vill du jämföra ${selectedBirds[0].name_sv} med?`
                            : "Vilken fågel vill du jämföra?"
                    }
                    onClearInput={() => setInputValue("")}
                />
            )}
            {isLoading && <Loader color={theme.colors.primary.base} />}
            {searchResults.length > 0 &&
                !isLoading &&
                searchResults.map((bird) => {
                    if (bird) {
                        return (
                            <BirdListing
                                {...bird}
                                key={bird.id}
                                image={bird.images[0]}
                                showImageOnMobile={true}
                                onClick={() => selectBird(bird)}
                                hasBorder
                            />
                        );
                    }
                })}
            {selectedBirds.length === 2 && !showComparison && (
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
                        onClick={() => setShowComparison(true)}
                    >
                        {" "}
                        Fortsätt{" "}
                    </Button>
                </div>
            )}
            {!isLoading &&
                searchResults.length === 0 &&
                inputValue &&
                "Inga resultat"}
            {showComparison && (
                <div
                    css={{
                        marginTop: theme.baseFontSize,
                        paddingTop: theme.baseFontSize,
                        borderTop: `1px solid ${
                            theme.colors[constants.COLORS.LIGHT_GREY].base
                        }`,
                    }}
                >
                    {selectedBirds.map((bird) => (
                        <BirdInfo bird={bird} />
                    ))}
                </div>
            )}
        </div>
    );
};

const BirdInfo = ({ bird }) => {
    const theme = useContext(MollyThemeContext);
    const [imageIndex, setImageIndex] = useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = useState(0);

    return (
        <div
            css={{
                marginBottom: theme.baseFontSize,
                marginLeft: theme.baseFontSize / 2,
                ...breakpoints.tablet({
                    width: 616,
                    margin: 'auto',
                    marginBottom: theme.baseFontSize,
                })
            }}
        >
            <BirdDrawer
                bird={isDrawerOpen ? bird : {}}
                onClose={() => setIsDrawerOpen(false)}
            />
            <div
                css={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: theme.baseFontSize,
                }}
            >
                <Typography.Body css={{ fontWeight: "bold" }}>
                    {bird.name_sv}
                </Typography.Body>
                <Typography.Caption
                    css={{ cursor: "pointer" }}
                    onClick={() => setIsDrawerOpen(true)}
                >
                    Mer Info ➔
                </Typography.Caption>
            </div>
            <div css={{ width: "100%", textAlign: "center" }}>
                <ImageLoader
                    styles={{
                        width: 300,
                        height: 200,
                        objectFit: "cover",
                        margin: 'auto',
                    }}
                    src={bird.images[imageIndex]}
                />
                {imageIndex !== bird.images.length - 1 && (
                    <ImageLoader
                        styles={{
                            width: 300,
                            height: 200,
                            objectFit: "cover",
                            display: "none",
                            margin: 'auto',
                            paddingLeft: theme.baseFontSize,
                            ...breakpoints.tablet({
                                display: "initial",
                            }),
                        }}
                        src={bird.images[imageIndex + 1]}
                    />
                )}
            </div>
            <div
                css={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "auto",
                }}
            >
                <Typography.Caption
                    onClick={() => setImageIndex(imageIndex - 1)}
                    css={{
                        cursor: 'pointer',
                        ...breakpoints.tablet({
                            display: 'none',
                        })
                    }}
                >
                    {imageIndex != 0 && "< Föregående"}{" "}
                </Typography.Caption>
                <Typography.Caption
                    onClick={() => setImageIndex(imageIndex - 2)}
                    css={{
                        display: 'none',
                        cursor: 'pointer',
                        ...breakpoints.tablet({
                            display: 'initial',
                        })
                    }}
                >
                    {imageIndex != 0 && "< Föregående"}{" "}
                </Typography.Caption>
                <Typography.Caption
                    onClick={() => setImageIndex(imageIndex + 1)}
                    css={{
                        cursor: 'pointer',
                        ...breakpoints.tablet({
                            display: "none",
                        }),
                    }}
                >
                    {imageIndex != bird.images.length - 1 && "Nästa >"}
                </Typography.Caption>
                <Typography.Caption
                    onClick={() => setImageIndex(imageIndex + 2)}
                    css={{
                        display: "none",
                        cursor: 'pointer',
                        ...breakpoints.tablet({
                            display: "initial",
                        }),
                    }}
                >
                    {imageIndex != bird.images.length - 1 && imageIndex != bird.images.length - 2 && "Nästa >"}
                </Typography.Caption>
            </div>
        </div>
    );
};

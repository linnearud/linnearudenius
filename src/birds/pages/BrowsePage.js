import { useState, useContext } from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";

import { MollyThemeContext } from "../../molly-ui";
import BirdListing from "../components/BirdListing";
import BirdDrawer from "../components/BirdDrawer";
import Loader from "../components/Loader";
import RecursiveList from "../components/RecursiveList"
import BirdDataContext from "../data/BirdDataContext";

export const BrowsePage = () => {
    const [selectedBird, setSelectedBird] = useState({});
    const [openOrders, setOpenOrders] = useState(new Set());
    const [openFamilies, setOpenFamilies] = useState(new Set());
    const [openSubfamilies, setOpenSubfamilies] = useState(new Set());
    const [openGenera, setOpenGenera] = useState(new Set());
    const { data, isLoading } = useContext(BirdDataContext);

    if (isLoading) {
        return <Loader />
    }

    const levels = {
        dataKey: "orders",
        level: 0,
        toggleOpen: (itm) => toggleOpen(itm.slug, openOrders, setOpenOrders),
        isOpen: (itm) => openOrders.has(itm.slug),
        next: [
            {
                dataKey: "families",
                level: 1,
                toggleOpen: (itm) =>
                    toggleOpen(itm.slug, openFamilies, setOpenFamilies),
                isOpen: (itm) => openFamilies.has(itm.slug),
                next: [
                    {
                        dataKey: "subfamilies",
                        level: 2,
                        toggleOpen: (itm) =>
                            toggleOpen(
                                itm.slug,
                                openSubfamilies,
                                setOpenSubfamilies
                            ),
                        isOpen: (itm) => openSubfamilies.has(itm.slug),
                        next: [
                            {
                                dataKey: "genera",
                                level: 3,
                                toggleOpen: (itm) =>
                                    toggleOpen(itm.slug, openGenera, setOpenGenera),
                                isOpen: (itm) => openGenera.has(itm.slug),
                                next: [
                                    {
                                        dataKey: "birds",
                                        level: 4,
                                        toggleOpen: (bird) => setSelectedBird(bird),
                                        isLeaf: true,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        dataKey: "level_2_genera",
                        level: 2,
                        toggleOpen: (itm) =>
                            toggleOpen(itm.slug, openGenera, setOpenGenera),
                        isOpen: (itm) => openGenera.has(itm.slug),
                        next: [
                            {
                                dataKey: "birds",
                                level: 3,
                                toggleOpen: (bird) => setSelectedBird(bird),
                                isLeaf: true,
                            },
                        ],
                    },
                ],
            },
        ],
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
            <BirdDrawer
                bird={selectedBird}
                onClose={() => setSelectedBird({})}
            />
            <RecursiveList data={data} levels={levels} ListItem={Item} />
        </div>
    );
};

const Item = ({
    name_sv,
    name_latin,
    image_path,
    level,
    children,
    isOpen,
    toggleOpen,
    ...rest
}) => {
    const theme = useContext(MollyThemeContext);
    return (
        <BirdListing
            name_sv={name_sv}
            name_latin={name_latin}
            image_path={image_path}
            onClick={toggleOpen}
            fontStyles={{
                fontSize: level < 3 ? theme.baseFontSize - level : 14,
                fontWeight: level % 2 === 0 && 500,
                fontStyle: level > 2 && "italic",
            }}
            hasBorder={level === 0}
            caretDirection={level === 4 ? "" : isOpen ? "up" : "down"}
            leftPadding={
                theme.baseFontSize / 2 + (theme.baseFontSize / 2) * level
            }
            inline={level === 4}
            {...rest}
        >
            {isOpen && children}
        </BirdListing>
    );
};

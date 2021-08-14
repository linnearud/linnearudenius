import { useState, useContext } from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";

import { MollyThemeContext } from "../../molly-ui";
import BirdListing from "../components/BirdListing";
import BirdDrawer from "../components/BirdDrawer";
import BirdDataContext from "../data/BirdDataContext";

export const BrowsePage = () => {
    const [selectedBird, setSelectedBird] = useState({});

    return (
        <div>
            <BirdDrawer
                bird={selectedBird}
                onClose={() => setSelectedBird({})}
            />
            <FullList selectBird={setSelectedBird} />
        </div>
    );
};

const FullList = ({ selectBird }) => {
    const [openOrders, setOpenOrders] = useState(new Set());
    const [openFamilies, setOpenFamilies] = useState(new Set());
    const [openSubfamilies, setOpenSubfamilies] = useState(new Set());
    const [openGenera, setOpenGenera] = useState(new Set());

    const { data, isLoading } = useContext(BirdDataContext);

    if (isLoading) {
        return null;
    }

    const levels = {
        dataKey: "orders",
        level: 0,
        toggleOpen: (slug) => toggleOpen(slug, openOrders, setOpenOrders),
        isOpen: (slug) => openOrders.has(slug),
        next: [
            {
                dataKey: "families",
                level: 1,
                toggleOpen: (slug) =>
                    toggleOpen(slug, openFamilies, setOpenFamilies),
                isOpen: (slug) => openFamilies.has(slug),
                next: [
                    {
                        dataKey: "subfamilies",
                        level: 2,
                        toggleOpen: (slug) =>
                            toggleOpen(
                                slug,
                                openSubfamilies,
                                setOpenSubfamilies
                            ),
                        isOpen: (slug) => openSubfamilies.has(slug),
                        next: [
                            {
                                dataKey: "genera",
                                level: 3,
                                toggleOpen: (slug) =>
                                    toggleOpen(slug, openGenera, setOpenGenera),
                                isOpen: (slug) => openGenera.has(slug),
                                next: [
                                    {
                                        dataKey: "birds",
                                        level: 4,
                                        toggleOpen: (bird) => selectBird(bird),
                                        isBird: true,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        dataKey: "level_2_genera",
                        level: 2,
                        toggleOpen: (slug) =>
                            toggleOpen(slug, openGenera, setOpenGenera),
                        isOpen: (slug) => openGenera.has(slug),
                        next: [
                            {
                                dataKey: "birds",
                                level: 3,
                                toggleOpen: (bird) => selectBird(bird),
                                isBird: true,
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

    return <RecursiveItem data={data} levels={levels} />;
};

const RecursiveItem = ({ data, levels }) => {
    const mapData = data[levels.dataKey];

    if (levels.isBird) {
        return mapData.map((itm) => (
            <Item
                {...itm}
                level={levels.level}
                key={itm.slug}
                toggleOpen={() => levels.toggleOpen(itm)}
            />
        ));
    } else {
        return mapData.map((itm) => (
            <Item
                {...itm}
                isOpen={levels.isOpen(itm.slug)}
                level={levels.level}
                key={itm.slug}
                toggleOpen={() => levels.toggleOpen(itm.slug)}
            >
                {levels.next.map((lvl, i) => (
                    <RecursiveItem key={i} data={itm} levels={lvl} />
                ))}
            </Item>
        ));
    }
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

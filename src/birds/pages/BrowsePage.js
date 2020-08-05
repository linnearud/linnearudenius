import { useState, Fragment, useContext } from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";

import {
    MollyThemeContext,
    Typography,
    breakpoints,
    constants,
    CloseIcon,
    CaretIcon,
} from "../../molly-ui";
import {
    ORDERS,
    GENERA,
    ALL_BIRDS,
    getGeneraIdsBySubfamily,
    getGeneraIdsByFamily,
    getBirdsByGeneraId,
} from "../data/helpers";
import BirdListing from "../components/BirdListing";
import BirdDrawer from "../components/BirdDrawer";

export const BrowsePage = () => {
    const [selectedBird, setSelectedBird] = useState({});

    const theme = useContext(MollyThemeContext);

    return (
        <div>
            <BirdDrawer bird={selectedBird} onClose={() => setSelectedBird({})} />
            <FullList selectBird={setSelectedBird} />
        </div>
    );
};

const FullList = ({ selectBird }) => {
    const [openOrders, setOpenOrders] = useState(new Set());
    const [openFamilies, setOpenFamilies] = useState(new Set());
    const [openSubfamilies, setOpenSubfamilies] = useState(new Set());
    const [openGenera, setOpenGenera] = useState(new Set());

    const theme = useContext(MollyThemeContext);

    const toggleOpen = (id, set, toggleFn) => {
        const modifiedSet = new Set(set);
        if (modifiedSet.has(id)) {
            modifiedSet.delete(id);
        } else {
            modifiedSet.add(id);
        }
        toggleFn(modifiedSet);
    };

    return (
        <div>
            {Object.values(ORDERS).map((order) => (
                <Item
                    {...order}
                    level={0}
                    isOpen={openOrders.has(order.id)}
                    key={order.id}
                    toggleOpen={() =>
                        toggleOpen(order.id, openOrders, setOpenOrders)
                    }
                >
                    <div>
                        {order.families.map((family) => (
                            <Item
                                {...family}
                                level={1}
                                isOpen={openFamilies.has(family.id)}
                                key={family.id}
                                toggleOpen={() =>
                                    toggleOpen(
                                        family.id,
                                        openFamilies,
                                        setOpenFamilies
                                    )
                                }
                            >
                                {family.subfamilies.length > 0 ? (
                                    <div>
                                        {family.subfamilies.map((subfamily) => (
                                            <Item
                                                {...subfamily}
                                                level={2}
                                                isOpen={openSubfamilies.has(
                                                    subfamily.id
                                                )}
                                                key={subfamily.id}
                                                toggleOpen={() =>
                                                    toggleOpen(
                                                        subfamily.id,
                                                        openSubfamilies,
                                                        setOpenSubfamilies
                                                    )
                                                }
                                            >
                                                <div>
                                                    {getGeneraIdsBySubfamily(
                                                        subfamily.id
                                                    ).map((genusId) => (
                                                        <Item
                                                            {...GENERA[genusId]}
                                                            level={3}
                                                            isOpen={openGenera.has(
                                                                genusId
                                                            )}
                                                            key={genusId}
                                                            toggleOpen={() =>
                                                                toggleOpen(
                                                                    genusId,
                                                                    openGenera,
                                                                    setOpenGenera
                                                                )
                                                            }
                                                        >
                                                            <div>
                                                                {getBirdsByGeneraId(
                                                                    genusId
                                                                ).map(
                                                                    (bird) => (
                                                                        <Item
                                                                            {...bird}
                                                                            key={
                                                                                bird.id
                                                                            }
                                                                            level={
                                                                                4
                                                                            }
                                                                            toggleOpen={() =>
                                                                                selectBird(
                                                                                    bird
                                                                                )
                                                                            }
                                                                        />
                                                                    )
                                                                )}
                                                            </div>
                                                        </Item>
                                                    ))}
                                                </div>
                                            </Item>
                                        ))}
                                    </div>
                                ) : (
                                    <div>
                                        {getGeneraIdsByFamily(family.id).map(
                                            (genusId) => (
                                                <Item
                                                    {...GENERA[genusId]}
                                                    level={2}
                                                    isOpen={openGenera.has(
                                                        genusId
                                                    )}
                                                    key={genusId}
                                                    toggleOpen={() =>
                                                        toggleOpen(
                                                            genusId,
                                                            openGenera,
                                                            setOpenGenera
                                                        )
                                                    }
                                                >
                                                    <div theme={theme}>
                                                        {getBirdsByGeneraId(
                                                            genusId
                                                        ).map((bird) => (
                                                            <Item
                                                                {...bird}
                                                                level={4}
                                                                key={bird.id}
                                                                toggleOpen={() =>
                                                                    selectBird(
                                                                        bird
                                                                    )
                                                                }
                                                            />
                                                        ))}
                                                    </div>
                                                </Item>
                                            )
                                        )}
                                    </div>
                                )}
                            </Item>
                        ))}
                    </div>
                </Item>
            ))}
        </div>
    );
};

const Item = ({
    name_sv,
    name_latin,
    image,
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
            image={image}
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

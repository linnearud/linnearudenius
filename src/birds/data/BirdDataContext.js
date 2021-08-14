import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as api from "../api";

export const BirdDataContext = React.createContext(null);

export const BirdDataProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const { data: orders } = await api.get("/orders")
            const { data: genera } = await api.get("/genera")
            const { data: birds } = await api.get("/birds")

            const generaByFamily = genera.reduce((map, currentGenus) => {
                if (currentGenus.family.slug in map) {
                    map[currentGenus.family.slug].genera.push(currentGenus)
                } else {
                    map[currentGenus.family.slug] = currentGenus.family
                    map[currentGenus.family.slug].genera = [currentGenus]
                }
                return map
            }, {})

            const families = {}

            Object.values(generaByFamily).forEach(family => {
                const subfamilies = {};
                const level_2_genera = [];

                family.genera.forEach(genus => {
                    if (genus.subfamily) {
                        if (genus.subfamily.slug in subfamilies) {
                            subfamilies[genus.subfamily.slug].genera.push(genus);
                        } else {
                            subfamilies[genus.subfamily.slug] = genus.subfamily;
                            subfamilies[genus.subfamily.slug].genera = [genus];
                        }
                    } else {
                        level_2_genera.push(genus);
                    }
                })

                families[family.slug] =  {
                    ...family,
                    subfamilies: Object.values(subfamilies),
                    level_2_genera: level_2_genera
                }
            })

            const data = orders.map(order => {
                const orderFamilies = []
                order.families.forEach(fam => {
                    orderFamilies.push(families[fam.slug])
                })
                return {
                    ...order,
                    families: orderFamilies,
                }
            })

            setData({orders: data, birds: birds})
            setIsLoading(false)
        }
        fetchData()
    }, []);


    return (
        <BirdDataContext.Provider value={{data, isLoading}}>
            {children}
        </BirdDataContext.Provider>
    );
};

export default BirdDataContext;

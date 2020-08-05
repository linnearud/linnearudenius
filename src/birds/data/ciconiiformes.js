import { orders } from "./orders.js";
import { families } from "./families.js";
import { subfamilies } from "./subfamilies.js";
import { genera } from "./genera";

export const birds = [
    {
        id: "ciconia-ciconia",
        order: orders.ciconiiformes,
        family: families.ciconiidae,
        subfamily: subfamilies.ciconiinae,
        genus: genera.ciconia,
        name_sv: "Vit stork",
        name_latin: "Ciconia ciconia",
        name_en: "White stork",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/f/fb/Ciconia_ciconia_-_01.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/d4/Ciconia_ciconia_%28aka%29.jpg",
            "https://p0.pikist.com/photos/364/541/stork-beach-sea-white-bird-ciconiidae-ciconia-ciconia-shore-standing.jpg",
            "https://p0.pikist.com/photos/995/1021/stork-bird-feathered-race-white-animals-living-nature-animals-of-russia-ciconia-ciconia-green-grass.jpg",
            "https://live.staticflickr.com/4415/36880571632_fdd1ec6f90_b.jpg",
        ],
        characteristics_fageln:
            "Stor. Ca en meter. Vingspann ca två meter. Näbb och ben röda, annars vit förutom delar av vingarna som är svarta. Långa ben, hals och näbb.",
        spread_fageln: "Sydligaste Sverige. Ofta i männsikors närhet.",
        link_fageln: "https://www.fageln.se/arten/vit-stork.aspx",
        hunt: "",
    },
];

import { orders } from "./orders.js";
import { families } from "./families.js";
import { subfamilies } from "./subfamilies.js";
import { genera } from "./genera";

export const birds = [
    {
        id: 'gavia-stellata',
        order: orders.gaviiformes,
        family: families.gaviidae,
        subfamily: subfamilies.gaviinae,
        genus: genera.gavia,
        name_sv: "Smålom",
        name_latin: "Gavia stellata",
        name_en: "Red-throated loon",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/f/f5/Gavia_Stellata_%C3%96lfus%C3%A1_20090606.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/e/e8/Red-throated_Loon_%28Gavia_stellata%29_-_Summer_plumage_breeding_adult2.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/f/ff/Gavia_stellata_-New_Jersey_-USA-26Feb2009.jpg",
            "https://s0.geograph.org.uk/geophotos/03/78/51/3785175_1abe4850.jpg",
            "https://live.staticflickr.com/7137/7700754002_9517d37ce8_b.jpg",
        ],
        characteristics_fageln: "53 cm – 69 cm. I sommardräkt askgrått huvud med brunröd halsfläck. Ryggen jämngrå beströdd med små ljusare fläckar som är svåra att se på längre avstånd.",
        spread_fageln: "Häckar spritt över stora delar av landet. I huvudsak en nordlig utbredning med tyngdpunkt på västra Svealand och södra Norrland",
        link_fageln: "https://fageln.se/art/smalom.aspx",
        hunt: ''
    },
    {
        id: "gavia-arctica",
        order: orders.gaviiformes,
        family: families.gaviidae,
        subfamily: subfamilies.gaviinae,
        genus: genera.gavia,
        name_sv: "Storlom",
        name_latin: "Gavia arctica",
        name_en: "Black-throated loon",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Gavia_arctica_EM1B1934_%2848009481846%29.jpg/800px-Gavia_arctica_EM1B1934_%2848009481846%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Gavia_arctica1.jpg/800px-Gavia_arctica1.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/b/b8/Gavia_arctica_%28Black-throated_Loon_or_Black-throated_Diver%29_on_nest.jpg",
            "https://live.staticflickr.com/8496/27953131834_0407c07508_b.jpg",
        ],
        characteristics_fageln: "63-75 cm. Vingbredd på drygt 100 cm. Sammetslent ljusgrå hjässa och nacke. Framdelen av halsen och strupen kolsvart omgärdat av ett svart-vitrandigt mönster. Kroppsovansidan tecknat med flera vita stora fält.",
        spread_fageln: "Förekommer i så gott som hela Sverige från Skåne till nordligaste Lappland.",
        link_fageln: "https://fageln.se/art/storlom.aspx",
        hunt: ''
    }
]
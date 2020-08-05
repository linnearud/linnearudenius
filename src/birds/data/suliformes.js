import { orders } from "./orders.js";
import { families } from "./families.js";
import { subfamilies } from "./subfamilies.js";
import { genera } from "./genera";

export const birds = [
    {
        id: "morus-bassanus",
        order: orders.suliformes,
        family: families.sulidae,
        genus: genera.morus,
        name_sv: "Havssula",
        name_latin: "Morus Bassanus",
        name_en: "Northern gannet",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/2/2d/Morus_bassanus_adu.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/59/Morus_bassanus_32.jpg",
            "https://cdn.pixabay.com/photo/2017/03/17/00/34/northern-gannet-2150635_960_720.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Wilhelma_Basst%C3%B6lpel_Morus_bassanus_0473B.jpg",
        ],
        characteristics_fageln:
            "Ca 90-100 cm. Vingspann ca 165-180 cm. Vit med svarta handpennor. Näbben ljust blåaktig och ganska lång och vass. Under häckning är nacken gulfärgad. Ungfåglar är gråbrunspräckliga med ljusare undersida. Fjäderdräkten blir successivt ljusare under de första fyra åren för att nå sitt adulta utseende efter fem år.",
        spread_fageln:
            "Havssula är en regelbunden gäst vid Västkusten, oftast på hösten. Häckar på klippöar i Nordatlanten vid t.ex. Storbritannien men även i Norge. Drar sig ofta söderut i Atlanten under vintern.",
        link_fageln: "https://www.fageln.se/arten/havssula.aspx",
        hunt: "",
    },
    {
        id: "phalacrocorax-carbo",
        order: orders.suliformes,
        family: families.phalacrocoracidae,
        subfamily: subfamilies.phalacrocoracinae,
        genus: genera.phalacrocorax,
        name_sv: "Storskarv",
        name_latin: "Phalacrocorax carbo",
        name_en: "Great cormorant",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/7/71/Cormorant_%28Phalacrocorax_carbo%29_%2814%29.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/6/68/Phalacrocorax_carbo_Vic.jpg",
            "https://farm5.staticflickr.com/4771/40575654542_10e09c1993_b.jpg",
            "https://p0.pikist.com/photos/128/14/cormorant-phalacrocorax-carbo-black-water-bird-animal-world-feather-animal-plumage-nature.jpg",
        ],
        characteristics_fageln: "90 cm. Stor, svart, långhalsad sjö/havsfågel med en gul eller rödaktig fläck vid näbbroten. Ses ofta sitta på en sten och torka sina utbredda vingar.",
        spread_fageln: "Häckar och uppehåller sig vid såväl kusten som i sjöar oftast på grunt vatten.",
        link_fageln: "https://www.fageln.se/art/storskarv.aspx",
        hunt: '',
    }
];

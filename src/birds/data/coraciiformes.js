import { orders } from "./orders.js";
import { families } from "./families.js";
import { subfamilies } from "./subfamilies.js";
import { genera } from "./genera";

export const birds = [
    {
        id: "alcedo-atthis",
        order: orders.coraciiformes,
        family: families.alcedinidae,
        subfamily: subfamilies.alcedinindae,
        genus: genera.alcedo,
        name_sv: "Kungsfiskare",
        name_latin: "Alcedo atthis",
        name_en: "Common kingfisher",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/c/cc/Common_Kingfisher_Alcedo_atthis.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/9/92/%E2%99%82_Common_Kingfisher_%28Alcedo_atthis%29_Photograph_By_Shantanu_Kuveskar%2C_Mangaon%2C_Maharashtra%2C_India.jpg",
            "data:image/jpeg;base64,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",
            "https://upload.wikimedia.org/wikipedia/commons/4/4a/Common_kingfisher_%28Alcedo_atthis_bengalensis%29_with_fish.jpg",
        ],
        characteristics_fageln:
            "Ca 17-20 cm. Vingspann ca 25 cm. Kort stjärt, kompakt kropp, kort hals, stort huvud och oproportionerligt lång näbb. Grönblå ovansida och hjässa. Undersidan orangefärgad. Vit fläck på hakan och sidan av halsen.",
        spread_fageln: "Södra Sverige upp till ungefär Västmanland.",
        link_fageln: "https://www.fageln.se/arter/kungsfiskare.aspx",
        hunt: "",
    },
];
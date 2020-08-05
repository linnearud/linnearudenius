import { orders } from "./orders.js";
import { families } from "./families.js";
import { subfamilies } from "./subfamilies.js";
import { genera } from "./genera";

export const birds = [
    {
        id: "cuculus-canorus",
        order: orders.cuculiformes,
        family: families.cuculidae,
        subfamily: subfamilies.cuculinae,
        genus: genera.cuculus,
        name_sv: "Gök",
        name_latin: "Cuculus canorus",
        name_en: "Common cuckoo",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/2/2f/Common_Cuckoo_%28Cuculus_canorus%29_%2825766169158%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Common_cuckoo_%28Cuculus_canorus%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/1b/Common_Cuckoo_%28Cuculus_canorus%29_%2838060866216%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/14/Common_Cuckoo_%28Cuculus_canorus%29_%2837732267762%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/2/20/Common_Cuckoo_%28Cuculus_canorus%29_%2845225643372%29.jpg",
        ],
        characteristics_fageln:
            "32 - 36 cm. En slank fågel med lång rundad stjärt samt spetsiga vingar. Smal klen näbb. Hannen är Jämnt blågrå på ovansidan samt huvud och bröst. Skarp gräns undertill mot vit buk med fin mörk tvärbandning. Honan finns i två färgvariationer. En grå som liknar hannen och en mer sällsyntare rostbrun variant med mörk tvärvattring över hela kroppen. När göken sitter hänger den ofta lite med vingarna.",
        spread_fageln:
            "Spridd i hela landet från Skåne i söder till fjällhedarna i norr.",
        link_fageln: "https://www.fageln.se/art/goek.aspx",
        hunt: "",
    },
];

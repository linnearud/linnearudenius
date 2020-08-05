import { orders } from "./orders.js";
import { families } from "./families.js";
import { subfamilies } from "./subfamilies.js";
import { genera } from "./genera";

export const birds = [
    {
        id: "columba-livia",
        order: orders.columbiformes,
        family: families.columbidae,
        subfamily: subfamilies.columbinae,
        genus: genera.columba,
        name_sv: "Tamduva",
        name_latin: "Columba livia",
        name_en: "Domestic pigeon",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/5/56/Paloma_brav%C3%ADa_%28Columba_livia%29%2C_Palacio_de_Nymphenburg%2C_M%C3%BAnich%2C_Alemania01.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/9/93/Rock_Pigeon_%28Columba_livia%29_in_Ia%C8%99i.JPG",
            "https://p0.pikist.com/photos/24/915/domestic-pigeon-columba-livia-domestica-dove-bird-pigeon-animal-nature-feathers-peace.jpg",
            "https://cdn.pixabay.com/photo/2014/04/26/16/35/rock-dove-332543_960_720.jpg",
        ],
        characteristics_fageln:
            "33 cm. Härstammar ursprungligen från den vilda klippduvan och förekommer idag med stora individuella dräktvariationer. En del liknar klippduvan och kan vara omöjliga att skilja från denna. Tamduvan har grå dräkt (ljusare ovan), vit övergump och breda svarta vingband. Vingundersidorna är vita och skiljer sig från skogduvans, som är grå. Halssidorna kan också vara grönskimrande. Från denna typ finns sedan alla övergångar via spräckligt vitgrå till helt vita. Även individer med helt andra färger förekommer, exempelvis brun, svart och rödaktig.",
        spread_fageln:
            "Tamduvan finns i samhällen och städer över större delar av landet med undantag för delar av Norrland.",
        link_fageln: "https://www.fageln.se/art/tamduva.aspx",
        hunt: "",
    },
    {
        id: "columba-oenas",
        order: orders.columbiformes,
        family: families.columbidae,
        subfamily: subfamilies.columbinae,
        genus: genera.columba,
        name_sv: "Skogsduva",
        name_latin: "Columba oenas",
        name_en: "Stock dove",
        images: [
            "data:image/jpeg;base64,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",
            "https://upload.wikimedia.org/wikipedia/commons/a/a6/ColumbaOenas.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/3/37/2017-03-05_Columba_oenas%2C_Armstrong_Park_4.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/0/0d/2017-03-05_Columba_oenas%2C_Armstrong_Park_2.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/a/ad/Stock_Dove_%28Columba_oenas%29%2C_Craigleith%2C_Edinburgh_-_geograph.org.uk_-_1229775.jpg",
        ],
        characteristics_fageln:
            "33 cm. Svarta vingband och svarta vingspetsar. Halsen skimrar i grönt och violett. I övrigt gråfärgad.",
        spread_fageln:
            "Häckar i södra och mellersta Sverige med en koncentration i de allra sydligaste delarna och östra delarna. Sällsynt längre norrut i landet.",
        link_fageln: "https://www.fageln.se/art/skogsduva.aspx",
        hunt: "",
    },
    {
        id: "columba-palumbus",
        order: orders.columbiformes,
        family: families.columbidae,
        subfamily: subfamilies.columbinae,
        genus: genera.columba,
        name_sv: "Ringduva",
        name_latin: "Columba palumbus",
        name_en: "Common wood pigeon",
        images: [
            "https://live.staticflickr.com/818/27445478998_531d95acf0_b.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/f/f5/Columba_palumbus_-garden_post-8.jpg",
            "https://live.staticflickr.com/65535/49874762598_d81756a3c9_b.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Columba_palumbus_1_%28Marek_Szczepanek%29.jpg/640px-Columba_palumbus_1_%28Marek_Szczepanek%29.jpg",
            "https://live.staticflickr.com/65535/49910138996_7479af1c20_b.jpg",
        ],
        characteristics_fageln:
            "42 cm. Den största av våra duvor. Lätt att känna igen på den vita teckningen på halsen, och i flykten de vita banden på vingarna.",
        spread_fageln:
            "Ringduvan finns spridd över större delen av Sverige, utom uppe på kalfjället och ute i ytterskärgården. Den häckar allmänt i södra och mellersta delarna av landet och blir lite mer ovanlig i det inre av Norrland.",
        link_fageln: "https://www.fageln.se/art/ringduva.aspx",
        hunt:
            "https://jagareforbundet.se/jakt/jakttider/jakttid-for-enskilt-djur/?animalId=449",
    },
    {
        id: "streptopelia-decaocto",
        order: orders.columbiformes,
        family: families.columbidae,
        subfamily: subfamilies.columbinae,
        genus: genera.streptopelia,
        name_sv: "Turkduva",
        name_latin: "Streptopelia decaocto",
        name_en: "Eurasian collared dove",
        images: [],
        characteristics_fageln:
            "28 cm. Den ljusaste av landets duvor. Ljust gråbrun med en tunn svart halskrage. Stjärten är på undersidan tvåfärgad, med den inre hälften svart och den yttre vitaktig. Könen är lika.",
        spread_fageln:
            "Häckar lokalt med i regel stora luckor i större delen av södra och mellersta Sverige.",
        link_fageln: "https://www.fageln.se/art/turkduva.aspx",
        hunt: "",
    },
];

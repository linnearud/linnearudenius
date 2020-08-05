import { orders } from "./orders.js";
import { families } from "./families.js";
import { subfamilies } from "./subfamilies.js";
import { genera } from "./genera";

export const birds = [
    {
        id: "jynx-torquilla",
        order: orders.piciformes,
        family: families.picidae,
        subfamily: subfamilies.jynginae,
        genus: genera.jynx,
        name_sv: "Göktyta",
        name_latin: "Jynx torquilla",
        name_en: "Eurasian wryneck",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/1/13/Jynx_torquilla_no_%28cropped%29.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/2/28/Jynx_torquilla_%28Picidae%29_%28Eurasian_Wryneck%29_-_%28adult%29%2C_Chorokhi_Delta%2C_Georgia.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/f/f1/Jynx_torquilla_%2833725845783%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/a/ad/Jynx_torquilla_%2834536504885%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/2/27/Jynx_torquilla_%28Ramsoy%29.JPG",
        ],
        characteristics_fageln:
            "16 cm. En hackspett som skiljer sig från övriga hackspettar. Det är en brungråspräcklig fågel med ett tillbakadragande beteénde.",
        spread_fageln: "Häckar från Skåne upp till Torne lappmark",
        link_fageln: "https://www.fageln.se/art/goektyta.aspx",
        hunt: "",
    },
    {
        id: "picoides-tridactylus",
        order: orders.piciformes,
        family: families.picidae,
        subfamily: subfamilies.picinae,
        genus: genera.picoides,
        name_sv: "Tretåig hackspett",
        name_latin: "Picoides tridactylus",
        name_en: "Eurasian three-toed woodpecker",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/9/9b/Picoides_tridactylus%2C_Belarus_4.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/7/76/Picoides_tridactylus%2C_Belarus_5.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/e/ef/Picchio_tridattilo_%28Picoides_tridactylus%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Picoides_tridactylus%2C_Belarus_2.jpg",
            "https://live.staticflickr.com/7292/8972720166_17d4964b83_b.jpg",
        ],
        characteristics_fageln:
            "20-25 cm. Svart och vit. Saknar rött/rosa i fjäderdräkten (som t.ex. större- och mindre hackspett har). Hanen har gul hjässa.",
        spread_fageln: "Mellersta och norra Sverige",
        link_fageln: "https://www.fageln.se/art/tretaig-hackspett.aspx",
        hunt: "",
    },
    {
        id: "dryobates-minor",
        order: orders.piciformes,
        family: families.picidae,
        subfamily: subfamilies.picinae,
        genus: genera.dryobates,
        name_sv: "Mindre hackspett",
        name_latin: "Dryobates minor",
        name_en: "Lesser spotted woodpecker",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Dendrocopos_minor_291108.jpg/450px-Dendrocopos_minor_291108.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/0/0c/Dvergspett_%28Dendrocopos_minor%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/0/05/Dendrocopos_minor.jpg",
        ],
        characteristics_fageln:
            "14 cm. Vår minsta hackspett. Storlek som en gråsparv. Tvärbandad på ryggen. Honan går helt i svart-vitt medan hanen har rött på hjässan. ",
        spread_fageln:
            "De flesta finns koncentrerade i lövskogsdominerade områden i södra och mellersta Sverige. Är under häckningen beroende av lövskog. Gärna i träsk-liknande områden.",
        link_fageln: "https://www.fageln.se/art/mindre-hackspett.aspx",
        hunt: "",
    },
    {
        id: "dendrocopos-major",
        order: orders.piciformes,
        family: families.picidae,
        subfamily: subfamilies.picinae,
        genus: genera.dendrocopos,
        name_sv: "Större hackspett",
        name_latin: "Dendrocopos major",
        name_en: "Great spotted woodpecker",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/5/5c/My_best_Dendrocopos_major.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/8/87/Dendrocopos_major_EM1B2679_%2835219263071%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/6/6e/Dendrocopos_major_%28female_s2%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/d0/Dendrocopos_major_-Finland_-female_and_juvenile_on_tree-8.jpg",
            "https://live.staticflickr.com/8739/17168226292_472ef6b345_b.jpg",
        ],
        characteristics_fageln:
            "23 cm. Våran vanligaste hackspett. Har en iögonfallande vit fläck på var vinge. Hannen har svart hjässa med röd nacke, honan saknar röd nackfläck och ungfåglarna har röd hjässa. Samtliga har röda undre stjärttäckare.",
        spread_fageln:
            "Den mest spridda av våra hackspettar. Förekommer allmänt i hela landet norrut till Lycksele Lappmark och södra Norrbotten. Längre norrut blir den mer sällsynt och saknas helt som häckfågel i fjällbjörkskogen.",
        link_fageln: "https://www.fageln.se/art/stoerre-hackspett.aspx",
        hunt: "",
    },
    {
        id: "dryocopus-martius",
        order: orders.piciformes,
        family: families.picidae,
        subfamily: subfamilies.picinae,
        genus: genera.dryocopus,
        name_sv: "Spillkråka",
        name_latin: "Dryocopus martius",
        name_en: "Black woodpecker",
        images: [
            "https://live.staticflickr.com/8760/17103736860_4b6f18e763_b.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/4/43/%D0%96%D0%BE%D0%B2%D0%BD%D0%B0_%D1%87%D0%BE%D1%80%D0%BD%D0%B0_%28Dryocopus_martius%29.jpg",
            "https://live.staticflickr.com/3946/15508541581_2bfde4b568_b.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/a/a5/Dryocopus_martius_Sopot_1.jpg",
        ],
        characteristics_fageln:
            "46 cm. Områdets största hackspett. Helsvart med endast rött på huvudet. Honan bara röd i nacken.",
        spread_fageln:
            "Häckar i hela landet med undantag för fjällen med omgivande björkskogsregioner.",
        link_fageln: "https://www.fageln.se/art/spillkraka.aspx",
        hunt: "",
    },
    {
        id: "picus-viridis",
        order: orders.piciformes,
        family: families.picidae,
        subfamily: subfamilies.picinae,
        genus: genera.picus,
        name_sv: "Gröngöling",
        name_latin: "Picus viridis",
        name_en: "European green woodpecker",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/b/bd/Picus_viridis_1.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/c/c5/European_green_woodpecker_%28Picus_viridis%29_female_Barnes.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Picus_viridis_sharpei_080.jpg/685px-Picus_viridis_sharpei_080.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Picus_viridis_sharpei_080.jpg/685px-Picus_viridis_sharpei_080.jpg",
            "data:image/jpeg;base64,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",
        ],
        characteristics_fageln:
            "30 - 36 cm. Vingbredd upp till drygt 50 cm. Flyger i stora bågar. Olivgrön ovansida med gul övergump. Rött band som går från pannan över hela huvudet och slutar i nacken.",
        spread_fageln:
            "Vida spridd och lokalt tämligen allmänt i södra och mellersta Sverige upp till södra Värmland, Västmanland, sydöstra Dalarna och Gästrikland. Förekommer även längre norrut i en bred zon uppåt längs med Norrlandskusten. Finns ännu ej på Gotland. Inte heller på Åland eller någonstans i Finland.",
        link_fageln: "https://www.fageln.se/art/groengoeling.aspx",
        hunt: "",
    },
    {
        id: "picus-canus",
        order: orders.piciformes,
        family: families.picidae,
        subfamily: subfamilies.picinae,
        genus: genera.picus,
        name_sv: "Gråspett",
        name_latin: "Picus canus",
        name_en: "Grey-headed woodpecker",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/4/4a/Grey-headed_Woodpecker_2.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/6/60/Picus_canus_%28%D0%A1%D0%B5%D0%B4%D0%BE%D0%B9_%D0%B4%D1%8F%D1%82%D0%B5%D0%BB%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/d2/Picus_canus%2C_Bia%C5%82owie%C5%BCa_1.jpg",
            "https://live.staticflickr.com/1695/25495160194_0df9215348_b.jpg",
        ],
        characteristics_fageln:
            "Ca 30 cm. Vingspann ca 40 cm. Grå nacke och huvud, mossgröna vingar och grå undersida. Hanen röd fläck i pannan.",
        spread_fageln: "Mellansverige och södra- och mellersta Norrland.",
        link_fageln: "https://www.fageln.se/arter/graspett.aspx",
        hunt: "",
    },
];

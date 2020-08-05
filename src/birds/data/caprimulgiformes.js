import { orders } from "./orders.js";
import { families } from "./families.js";
import { subfamilies } from "./subfamilies.js";
import { genera } from "./genera";

export const birds = [
    {
        id: "caprimulgus-europaeus",
        order: orders.caprimulgiformes,
        family: families.caprimulgidae,
        subfamily: subfamilies.caprimulginae,
        genus: genera.caprimulgus,
        name_sv: "Nattskärra",
        name_latin: "Caprimulgus europaeus",
        name_en: "European nightjar",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/d/d9/Caprimulgus_europaeus_-_italianwildlife.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/b/b5/Caprimulgus_europaeus_g.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Caprimulgus_europaeus_1200x855.jpg/800px-Caprimulgus_europaeus_1200x855.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/Caprimulgus_europaeus_no._5.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/%C5%9Eivanxap%C3%AEnok.jpg/1280px-%C5%9Eivanxap%C3%AEnok.jpg",
        ],
        characteristics_fageln:
            "26-29 cm. vingspann ca 60 centimeter. Spräcklig i svart och i olika gråa och bruna toner. Ljus fläck långt ut på vingarna och längst ut på sidorna av stjärten.",
        spread_fageln: "Södra Sverige upp till södra Norrland.",
        link_fageln: "https://www.fageln.se/art/nattskaerra.aspx",
        hunt: "",
    },
];

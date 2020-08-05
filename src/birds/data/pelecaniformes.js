import { orders } from "./orders.js";
import { families } from "./families.js";
import { subfamilies } from "./subfamilies.js";
import { genera } from "./genera";

export const birds = [
    {
        id: 'botaurus-stellaris',
        order: orders.pelecaniformes,
        family: families.ardeidae,
        subfamily: subfamilies.botaurinae,
        genus: genera.botaurus,
        name_sv: 'Rördrom',
        name_latin: 'Botaurus stellaris',
        name_en: 'Eurasian bittern',
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Bittern_-_Botaurus_stellaris.jpg/512px-Bittern_-_Botaurus_stellaris.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/0/02/Botaurus_stellaris_%28Marek_Szczepanek%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/c/c2/2015-10-19_Botaurus_stellaris%2C_Gosforth_Park_5.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/3/3a/2015-10-19_Botaurus_stellaris%2C_Gosforth_Park_3.jpg",
        ],
        characteristics_fageln: "Ca 70-80 cm. Vingspann ca 100-130 cm. Spräcklig i svart, brunt och gult.",
        spread_fageln: "Söder om Dalälven. Tätast kring slättsjöarna i Svealand.",
        link_fageln: "https://www.fageln.se/arten/roerdrom.aspx",
        hunt: '',
    },
    {
        id: 'ardea-cinerea',
        order: orders.pelecaniformes,
        family: families.ardeidae,
        subfamily: subfamilies.ardeinae,
        genus: genera.ardea,
        name_sv: 'Gråhäger',
        name_latin: 'Ardea cinerea',
        name_en: 'Grey heron',
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/3/31/Ardea_cinerea_%2814172633837%29.jpg",
            "https://cdn.pixabay.com/photo/2014/08/10/15/50/grey-414758_960_720.jpg",
            "https://live.staticflickr.com/5068/5593437102_efd6fe49cb_b.jpg",
            "https://live.staticflickr.com/7838/47384012491_ccd8e96779_b.jpg",
            "https://c1.wallpaperflare.com/preview/302/883/656/heron-grey-heron-ardea-cinerea.jpg",
        ],
        characteristics_fageln: "84 – 102 cm. Vingbredd 155 – 175 cm. I huvudsak grå på ovansidan och vit eller ljusgrå på undersidan. Flyger med kupade vingar, och framifrån syns då vita fläckar på vingknogarna. Flyger med indragna hals, och även när den står har den ofta halsen krökt. Sitter gärna i träd.",
        spread_fageln: "Häckar mest i södra delarna av Sverige. Undantag är Öland och Gotland där den uppträder mer sporadiskt. Häckar mer sällsynt i mellersta Sverige.",
        link_fageln: "https://www.fageln.se/art/grahaeger.aspx",
        hunt: '',
    }
]
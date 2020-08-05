import { orders } from "./orders.js";
import { families } from "./families.js";
import { subfamilies } from "./subfamilies.js";
import { genera } from "./genera";

export const birds = [
    {
        id: "tachybaptus-ruficollis",
        order: orders.podicipediformes,
        family: families.podicipedidae,
        genus: genera.tachybaptus,
        name_sv: "Smådopping",
        name_latin: "Tachybaptus ruficollis",
        name_en: "Little grebe",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Little_Grebe_%28Tachybaptus_ruficollis%29-_Breeding_plumage_W2_IMG_8770.jpg/800px-Little_Grebe_%28Tachybaptus_ruficollis%29-_Breeding_plumage_W2_IMG_8770.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Tachybaptus_ruficollis_ruficollis.jpg/800px-Tachybaptus_ruficollis_ruficollis.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/8/84/Little_grebe_Zwergtaucher.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/53/Tachybaptus_ruficollis_eating_Shrimp.jpg",
        ],
        characteristics_fageln:
            "27 cm. Den minsta av våra fem doppingar. Faktiskt något av det minsta man kan se i fågelväg som simmar i vatten. Känns igen på sina rödbruna kinder och strupe, och på en gulvit fläck vid näbbroten.",
        spread_fageln: "Sällsynt i de södra delarna av landet.",
        link_fageln: "https://fageln.se/art/smadopping.aspx",
        hunt: "",
    },
    {
        id: "podiceps-cristatus",
        order: orders.podicipediformes,
        family: families.podicipedidae,
        genus: genera.podiceps,
        name_sv: "Skäggdopping",
        name_latin: "Podiceps cristatus",
        name_en: "Great crested grebe",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/c/c0/Great_Crested_Grebe_%28Podiceps_cristatus%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/2/27/Podiceps_cristatus_2_-_Lake_Dulverton.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/7/7e/Great_Crested_Grebe_%28Podiceps_cristatus%29_%2814%29.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Podiceps_cristatus_%28winter%29.jpg/1280px-Podiceps_cristatus_%28winter%29.jpg",
        ],
        characteristics_fageln:
            "48 cm. I sommardräkt lätt att känna igen på de mörka örontofsarna och det rödbruna kindskägget.",
        spread_fageln:
            "Huvuddelen av beståndet finns i sydöstra delarna av landet, men förkommer i mindre omfattning även i de sydvästra delarna och sporadiskt längs med Norrlandskusten.",
        link_fageln: "https://fageln.se/art/skaeggdopping.aspx",
        hunt: "",
    },
    {
        id: "podiceps-grisegena",
        order: orders.podicipediformes,
        family: families.podicipedidae,
        genus: genera.podiceps,
        name_sv: "Gråhakedopping",
        name_latin: "Podiceps grisegena",
        name_en: "Red-necked grebe",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/0/02/Bird_of_species_podiceps_grisegena_in_denmark.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/e/e0/Podiceps_grisegena_%2833281894730%29.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9kQhbQd9lyeDc1Rv4feqJyaAnr1ZynRBQ8b3bdEO9e2XUNc&s",
            "https://upload.wikimedia.org/wikipedia/commons/5/5f/Podiceps_grisegena_%2833665945105%29.jpg",
        ],
        characteristics_fageln:
            "45 cm. Rödbrun hals med ljusgrå kinder, samt en tydlig gul mungipa. Vinterdräkten är grå i olika nyanser med en svag markering vid kinderna.",
        spread_fageln:
            "Största antalet dels vid kustlandet i Norrland samt sydvästra Skåne. Lokala förekomster finns spritt i resten av landets södra och mellersta delar.",
        link_fageln: "https://fageln.se/art/grahakedopping.aspx",
        hunt: "",
    },
    {
        id: "podiceps-auritus",
        order: orders.podicipediformes,
        family: families.podicipedidae,
        genus: genera.podiceps,
        name_sv: "Svarthakedopping",
        name_latin: "Podiceps auritus",
        name_en: "Horned grebe",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Horned_grebe_%282%29_-_%28Podiceps_auritus%29.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/1/1d/Flickr_-_Rainbirder_-_Slavonian_Grebe_%28Podiceps_auritus%29.jpg",
            "https://s0.geograph.org.uk/geophotos/03/31/78/3317829_9d8868be.jpg",
        ],
        characteristics_fageln:
            "31-38 cm. Vingspann ca 50 cm. I sommardräkten har den svart huvud med rödgula öronliknande tofsar vid sidorna av ansiktet och röd nacke. På vintern ljus med kraftigt tecknad svart hjässa. Rött öga.",
        spread_fageln:
            "I stora delar av landet från Blekinge till Lappland. Förekomsten är dock ojämn och den  häckar t.ex. inte i Bohuslän, Halland eller Skåne. Tyngdpunkten för närvarande i östra Svealand.",
        link_fageln: "https://fageln.se/arter/svarthakedopping.aspx",
        hunt: "",
    },
    {
        id: "podiceps-nigricollis",
        order: orders.podicipediformes,
        family: families.podicipedidae,
        genus: genera.podiceps,
        name_sv: "Svarthalsad dopping",
        name_latin: "Podiceps nigricollis",
        name_en: "Black-necked grebe",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/a/a9/Podiceps_nigricollis_%28Marek_Szczepanek%29.jpg",
            "https://c1.wallpaperflare.com/preview/801/508/948/black-neck-divers-bird-grebe-rarely.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/10/Black-necked_Grebe_Schwarzhalstaucher.jpg",
        ],
        characteristics_fageln:
            "Ca 30 cm. Vingspann ca 60 cm. Sommardräkten är karaktäristisk med bruna luftiga fjädrar på sidan och stjärten. I övrigt svart med gula örontofsar och röd iris.",
        spread_fageln:
            "Sällsynt i södra Sverige. Viss koncentration till Hornborgasjön men även vid en del andra grunda och vegetationsrika sjöar. Vanligare i t.ex. Danmark och östra Europa.",
        link_fageln: "https://fageln.se/arten/svarthalsad-dopping.aspx",
        hunt: "",
    },
];

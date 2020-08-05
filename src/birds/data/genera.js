import { orders } from "./orders.js";
import { families } from "./families.js";
import { subfamilies } from "./subfamilies.js";

export const genera = {
    anser: {
        id: "anser",
        name_latin: "Anser",
        name_sv: "Anser",
    },
    branta: {
        id: "branta",
        name_latin: "Branta",
        name_sv: "Branta",
    },
    anas: {
        id: "anas",
        name_latin: "Anas",
        name_sv: "Anas",
    },
    aythya: {
        id: "aythya",
        name_latin: "Aythya",
        name_sv: "Aythya",
    },
    bucephala: {
        id: "bucephala",
        name_latin: "Bucephala",
        name_sv: "Knipor",
    },
    clangula: {
        id: "clangula",
        name_latin: "Clangula",
        name_sv: "Alfågel",
    },
    tadorna: {
        id: "tadorna",
        name_latin: "Tadorna",
        name_sv: "Tadorna",
    },
    spatula: {
        id: "spatula",
        name_latin: "Spatula",
        name_sv: "Spatula",
    },
    mareca: {
        id: "mareca",
        name_latin: "Mareca",
        name_sv: "Mareca",
    },
    somateria: {
        id: "somateria",
        name_latin: "Somateria",
        name_sv: "Ejdrar",
    },
    melanitta: {
        id: "melanitta",
        name_latin: "Melanitta",
        name_sv: "Melanitta",
    },
    mergellus: {
        id: "mergellus",
        name_latin: "Mergellus",
        name_sv: "Mergellus",
    },
    mergus: {
        id: "mergus",
        name_latin: "Mergus",
        name_sv: "Mergus",
    },
    cygnus: {
        id: "cygnus",
        name_latin: "Cygnus",
        name_sv: "Svanar",
    },
    tetrastes: {
        id: "tetrastes",
        name_latin: "Tetrastes",
        name_sv: "Tetrastes",
    },
    lagopus: {
        id: "lagopus",
        name_latin: "Lagopus",
        name_sv: "Ripor",
    },
    lyrurus: {
        id: "lyrurus",
        name_latin: "Lyrurus",
        name_sv: "Orrar",
    },
    tetrao: {
        id: "tetrao",
        name_latin: "Tetrao",
        name_sv: "Tjädrar",
    },
    perdix: {
        id: "perdix",
        name_latin: "Perdix",
        name_sv: "Rapphöns",
    },
    coturnix: {
        id: "coturnix",
        name_latin: "Coturnix",
        name_sv: "Vaktlar",
    },
    phasianus: {
        id: "phasianus",
        name_latin: "Phasianus",
        name_sv: "Phasianus",
    },
    gavia: {
        id: "gavia",
        name_latin: "Gavia",
        name_sv: "Gavia",
    },
    tachybaptus: {
        id: "tachybaptus",
        name_latin: "Tachybaptus",
        name_sv: "Smådoppingar",
    },
    podiceps: {
        id: "podiceps",
        name_latin: "Podiceps",
        name_sv: "Doppingsläktet",
    },
    ciconia: {
        id: "ciconia",
        name_latin: "Ciconia",
        name_sv: "Egentliga storkar",
    },
    botaurus: {
        id: "botaurus",
        name_latin: "Botaurus",
        name_sv: "Botaurus",
    },
    ardea: {
        id: "ardea",
        name_latin: "Ardea",
        name_sv: "Ardea",
    },
    morus: {
        id: "morus",
        name_latin: "Morus",
        name_sv: "Morus",
    },
    phalacrocorax: {
        id: "phalacrocorax",
        name_latin: "Phalacrocorax",
        name_sv: "Skarvsläktet",
    },
    pandion: {
        id: "pandion",
        name_latin: "Pandion",
        name_sv: "Pandion",
    },
    pernis: {
        id: "pernis",
        name_latin: "Pernis",
        name_sv: "Pernis",
    },
    aquila: {
        id: "aquila",
        name_latin: "Aquila",
        name_sv: "Aquila",
    },
    accipiter: {
        id: "accipiter",
        name_latin: "Accipiter",
        name_sv: "Egentliga hökar",
    },
    circus: {
        id: "circus",
        name_latin: "Circus",
        name_sv: "Kärrhökar",
    },
    milvus: {
        id: "milvus",
        name_latin: "Milvus",
        name_sv: "Milvus",
    },
    haliaeetus: {
        id: "haliaeetus",
        name_latin: "Haliaeetus",
        name_sv: "Havsörnar",
    },
    buteo: {
        id: "buteo",
        name_latin: "Buteo",
        name_sv: "Buteo",
    },
    rallus: {
        id: "rallus",
        name_latin: "Rallus",
        name_sv: "Rallus",
    },
    crex: {
        id: "crex",
        name_latin: "Crex",
        name_sv: "Crex",
    },
    porzana: {
        id: "porzana",
        name_latin: "Porzana",
        name_sv: "Porzana",
    },
    gallinula: {
        id: "gallinula",
        name_latin: "Gallinula",
        name_sv: "Gallinula",
    },
    fulica: {
        id: "fulica",
        name_latin: "Fulica",
        name_sv: "Sothöns",
    },
    grus: {
        id: "grus",
        name_latin: "Grus",
        name_sv: "Grus",
    },
    haematopodidae: {
        id: "haematopodidae",
        name_latin: "Haematopodidae",
        name_sv: "Strandskator",
    },
    recurvirostra: {
        id: "recurvirostra",
        name_latin: "Recurvirostra",
        name_sv: "Recurvirostra",
    },
    vanellus: {
        id: "vanellus",
        name_latin: "Vanellus",
        name_sv: "Vipor",
    },
    pluvialis: {
        id: "pluvialis",
        name_latin: "Pluvialis",
        name_sv: "Pluvialis",
    },
    charadrius: {
        id: "charadrius",
        name_latin: "Charadrius",
        name_sv: "Strandpipare",
    },
    numenius: {
        id: "numenius",
        name_latin: "Numenius",
        name_sv: "Numenius",
    },
    limosa: {
        id: "limosa",
        name_latin: "Limosa",
        name_sv: "Limosa",
    },
    arenaria: {
        id: "arenaria",
        name_latin: "Arenaria",
        name_sv: "Roskarlar",
    },
    calidris: {
        id: "calidris",
        name_latin: "Calidris",
        name_sv: "Calidris",
    },
    scolopax: {
        id: "scolopax",
        name_latin: "Scolopax",
        name_sv: "Morkullor",
    },
    lymnocryptes: {
        id: "lymnocryptes",
        name_latin: "Lymnocryptes",
        name_sv: "Lymnocryptes",
    },
    gallinago: {
        id: "gallinago",
        name_latin: "Gallinago",
        name_sv: "Gallinago",
    },
    phalaropus: {
        id: "phalaropus",
        name_latin: "Phalaropus",
        name_sv: "Simsnäppor",
    },
    actitis: {
        id: "actitis",
        name_latin: "Actitis",
        name_sv: "Drillsnäppor",
    },
    tringa: {
        id: "tringa",
        name_latin: "Tringa",
        name_sv: "Tringa",
    },
    chroicocephalus: {
        id: "chroicocephalus",
        name_latin: "Chroicocephalus",
        name_sv: "Chroicocephalus",
    },
    hydrocoloeus: {
        id: "hydrocoloeus",
        name_latin: "Hydrocoloeus",
        name_sv: "Hydrocoloeus",
    },
    larus: {
        id: "larus",
        name_latin: "Larus",
        name_sv: "Larus",
    },
    hydroprogne: {
        id: "hydroprogne",
        name_latin: "Hydroprogne",
        name_sv: "Hydroprogne",
    },
    thalasseus: {
        id: "thalasseus",
        name_latin: "Thalasseus",
        name_sv: "Thalasseus",
    },
    sternula: {
        id: "sternula",
        name_latin: "Sternula",
        name_sv: "Sternula",
    },
    sterna: {
        id: "sterna",
        name_latin: "Sterna",
        name_sv: "Sterna",
    },
    stercorarius: {
        id: "stercorarius",
        name_latin: "Stercorarius",
        name_sv: "Labbar",
    },
    alle: {
        id: "alle",
        name_latin: "Alle",
        name_sv: "Alle",
    },
    uria: {
        id: "uria",
        name_latin: "Uria",
        name_sv: "Grisslor",
    },
    alca: {
        id: "alca",
        name_latin: "Alca",
        name_sv: "Alca",
    },
    cepphus: {
        id: "cepphus",
        name_latin: "Cepphus",
        name_sv: "Tejster",
    },
    columba: {
        id: "columba",
        name_latin: "Columba",
        name_sv: "Columba",
    },
    streptopelia: {
        id: "streptopelia",
        name_latin: "Streptopelia",
        name_sv: "Turturduvor",
    },
    cuculus: {
        id: "cuculus",
        name_latin: "Cuculus",
        name_sv: "Cuculus",
    },
    tyto: {
        id: "tyto",
        name_latin: "Tyto",
        name_sv: "Tyto",
    },
    bubo: {
        id: "bubo",
        name_latin: "Bubo",
        name_sv: "Uvar",
    },
    strix: {
        id: "strix",
        name_latin: "Strix",
        name_sv: "Strix",
    },
    surnia: {
        id: "surnia",
        name_latin: "Surnia",
        name_sv: "Surnia",
    },
    glaucidium: {
        id: "glaucidium",
        name_latin: "Glaucidium",
        name_sv: "Glaucidium",
    },
    aegolius: {
        id: "aegolius",
        name_latin: "Aegolius",
        name_sv: "Pärlugglor",
    },
    asio: {
        id: "asio",
        name_latin: "Asio",
        name_sv: "Asio",
    },
    caprimulgus: {
        id: "caprimulgus",
        name_latin: "Caprimulgus",
        name_sv: "Caprimulgus",
    },
    apus: {
        id: "apus",
        name_latin: "Apus",
        name_sv: "Apus",
    },
    alcedo: {
        id: "alcedo",
        name_latin: "Alcedo",
        name_sv: "Alcedo",
    },
    jynx: {
        id: "jynx",
        name_latin: "Jynx",
        name_sv: "Göktytor",
    },
    picoides: {
        id: "picoides",
        name_latin: "Picoides",
        name_sv: "Picoides",
    },
    dryobates: {
        id: "dryobates",
        name_latin: "Dryobates",
        name_sv: "Dryobates",
    },
    dendrocopos: {
        id: "dendrocopos",
        name_latin: "Dendrocopos",
        name_sv: "Dendrocopos",
    },
    dryocopus: {
        id: "dryocopus",
        name_latin: "Dryocopus",
        name_sv: "Spillkråkor",
    },
    picus: {
        id: "picus",
        name_latin: "Picus",
        name_sv: "Gröngölingar",
    },
    falco: {
        id: "falco",
        name_latin: "Falco",
        name_sv: "Falco",
    },
    lanius: {
        id: "lanius",
        name_latin: "Lanius",
        name_sv: "Törnskatesläktet",
    },
    oriolus: {
        id: "oriolus",
        name_latin: "Oriolus",
        name_sv: "Oriolus",
    },
    perisoreus: {
        id: "perisoreus",
        name_latin: "Perisoreus",
        name_sv: "Lavskrikor",
    },
    garrulus: {
        id: "garrulus",
        name_latin: "Garrulus",
        name_sv: "Nötskrikor",
    },
    nucifraga: {
        id: "nucifraga",
        name_latin: "Nucifraga",
        name_sv: "Nötkråkor",
    },
    corvus: {
        id: "corvus",
        name_latin: "Corvus",
        name_sv: "Corvus",
    },
    pica: {
        id: "pica",
        name_latin: "Pica",
        name_sv: "Skator",
    },
    bombycilla: {
        id: "bombycilla",
        name_latin: "Bombycilla",
        name_sv: "Bombycilla",
    },
    lophophanes: {
        id: "lophophanes",
        name_latin: "Lophophanes",
        name_sv: "Tofsmesar",
    },
    periparus: {
        id: "periparus",
        name_latin: "Periparus",
        name_sv: "Svartmesar",
    },
    poecile: {
        id: "poecile",
        name_latin: "Poecile",
        name_sv: "Titor",
    },
    cyanistes: {
        id: "cyanistes",
        name_latin: "Cyanistes",
        name_sv: "Blåmesar",
    },
    parus: {
        id: "parus",
        name_latin: "Parus",
        name_sv: "Parus",
    },
    remiz: {
        id: "remiz",
        name_latin: "Remiz",
        name_sv: "Remiz",
    },
    panurus: {
        id: "panurus",
        name_latin: "Panurus",
        name_sv: "Panurus",
    },
    lullula: {
        id: "lullula",
        name_latin: "Lullula",
        name_sv: "Lullula",
    },
    alauda: {
        id: "alauda",
        name_latin: "Alauda",
        name_sv: "Sånglärkor",
    },
    eremophila: {
        id: "eremophila",
        name_latin: "Eremophila",
        name_sv: "Eremophila",
    },
    riparia: {
        id: "riparia",
        name_latin: "Riparia",
        name_sv: "Backsvalor",
    },
    hirundo: {
        id: "hirundo",
        name_latin: "Hirundo",
        name_sv: "Hirundo",
    },
    delichon: {
        id: "delichon",
        name_latin: "Delichon",
        name_sv: "Delichon",
    },
    aegithalos: {
        id: "aegithalos",
        name_latin: "Aegithalos",
        name_sv: "Aegithalos",
    },
    phylloscopus: {
        id: "phylloscopus",
        name_latin: "Phylloscopus",
        name_sv: "Phylloscopus",
    },
    acrocephalus: {
        id: "acrocephalus",
        name_latin: "Acrocephalus",
        name_sv: "Acrocephalus",
    },
    hippolais: {
        id: "hippolais",
        name_latin: "Hippolais",
        name_sv: "Hippolais",
    },
    locustella: {
        id: "locustella",
        name_latin: "Locustella",
        name_sv: "Locustella",
    },
    sylvia: {
        id: "sylvia",
        name_latin: "Sylvia",
        name_sv: "Sylvia",
    },
    regulus: {
        id: "regulus",
        name_latin: "Regulus",
        name_sv: "Kungsfåglar",
    },
    troglodytes: {
        id: "troglodytes",
        name_latin: "Troglodytes",
        name_sv: "Troglodytes",
    },
    sitta: {
        id: "sitta",
        name_latin: "Sitta",
        name_sv: "Nötväckor",
    },
    certhia: {
        id: "certhia",
        name_latin: "Certhia",
        name_sv: "Certhia",
    },
    sturnus: {
        id: "sturnus",
        name_latin: "Sturnus",
        name_sv: "Starsläktet",
    },
    turdus: {
        id: "turdus",
        name_latin: "Turdus",
        name_sv: "Turdus",
    },
    muscicapa: {
        id: "muscicapa",
        name_latin: "Muscicapa",
        name_sv: "Muscicapa",
    },
    erithacus: {
        id: "erithacus",
        name_latin: "Erithacus",
        name_sv: "Erithacus",
    },
    luscinia: {
        id: "luscinia",
        name_latin: "Luscinia",
        name_sv: "Luscinia",
    },
    ficedula: {
        id: "ficedula",
        name_latin: "Ficedula",
        name_sv: "Ficedula",
    },
    phoenicurus: {
        id: "phoenicurus",
        name_latin: "Phoenicurus",
        name_sv: "Rödstjärtar",
    },
    saxicola: {
        id: "saxicola",
        name_latin: "Saxicola",
        name_sv: "Buskskvättor",
    },
    oenanthe: {
        id: "oenanthe",
        name_latin: "Oenanthe",
        name_sv: "Stenskvättor",
    },
    cinclus: {
        id: "cinclus",
        name_latin: "Cinclus",
        name_sv: "Cinclus",
    },
    passer: {
        id: "passer",
        name_latin: "Passer",
        name_sv: "Passer",
    },
    prunella: {
        id: "prunella",
        name_latin: "Prunella",
        name_sv: "Prunella",
    },
    motacilla: {
        id: "motacilla",
        name_latin: "Motacilla",
        name_sv: "Ärlesläktet",
    },
    anthus: {
        id: "anthus",
        name_latin: "Anthus",
        name_sv: "Piplärkor",
    },
    fringilla: {
        id: "fringilla",
        name_latin: "Fringilla",
        name_sv: "Fringilla",
    },
    coccothraustes: {
        id: "coccothraustes",
        name_latin: "Coccothraustes",
        name_sv: "Coccothraustes",
    },
    pinicola: {
        id: "pinicola",
        name_latin: "Pinicola",
        name_sv: "Pinicola",
    },
    pyrrhula: {
        id: "pyrrhula",
        name_latin: "Pyrrhula",
        name_sv: "Domherrar",
    },
    carpodacus: {
        id: "carpodacus",
        name_latin: "Carpodacus",
        name_sv: "Carpodacus",
    },
    chloris: {
        id: "chloris",
        name_latin: "Chloris",
        name_sv: "Grönfinkar",
    },
    linaria: {
        id: "linaria",
        name_latin: "Linaria",
        name_sv: "Hämplingar",
    },
    acanthis: {
        id: "acanthis",
        name_latin: "Acanthis",
        name_sv: "Acanthis",
    },
    loxia: {
        id: "loxia",
        name_latin: "Loxia",
        name_sv: "Korsnäbbsläktet",
    },
    carduelis: {
        id: "carduelis",
        name_latin: "Carduelis",
        name_sv: "Carduelis",
    },
    spinus: {
        id: "spinus",
        name_latin: "Spinus",
        name_sv: "Spinus",
    },
    emberiza: {
        id: "emberiza",
        name_latin: "Emberiza",
        name_sv: "Emberiza",
    },
    calcarius: {
        id: "calcarius",
        name_latin: "Calcarius",
        name_sv: "Lappsparvar",
    },
    plectrophenax: {
        id: "plectrophenax",
        name_latin: "Plectrophenax",
        name_sv: "Plectrophenax",
    },
};

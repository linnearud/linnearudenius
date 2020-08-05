import { families } from "./families.js";

export const orders = {
    anseriformes: {
        id: "anseriformes",
        name_latin: "Anseriformes",
        name_sv: "Andfåglar",
        families: [families.anatidae],
        image:
            "https://c0.wallpaperflare.com/preview/40/636/984/bird-animal-waterfowl-teal.jpg",
    },
    galliformes: {
        id: "galliformes",
        name_latin: "Galliformes",
        name_sv: "Hönsfåglar",
        families: [families.phasianidae],
        image:
            "https://p0.pikist.com/photos/628/923/pheasant-male-bird-phasianidae-galliformes-wildlife-animal-nature-plumage.jpg",
    },
    gaviiformes: {
        id: "gaviiformes",
        name_latin: "Gaviiformes",
        name_sv: "Lomfåglar",
        families: [families.gaviidae],
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/PacificLoon24.jpg/800px-PacificLoon24.jpg",
    },
    podicipediformes: {
        id: "podicipediformes",
        name_latin: "Podicipediformes",
        name_sv: "Doppingfåglar",
        families: [families.podicipedidae],
        image:
            "https://upload.wikimedia.org/wikipedia/commons/2/27/Podiceps_cristatus_2_-_Lake_Dulverton.jpg",
    },
    ciconiiformes: {
        id: "ciconiiformes",
        name_latin: "Ciconiiformes",
        name_sv: "Storkfåglar",
        families: [families.ciconiidae],
        image:
            "https://upload.wikimedia.org/wikipedia/commons/d/df/Mycteria_leucocephala_-_Pak_Thale.jpg",
    },
    pelecaniformes: {
        id: "pelecaniformes",
        name_latin: "Pelecaniformes",
        name_sv: "Pelikanfåglar",
        families: [families.ardeidae],
        image:
            "https://upload.wikimedia.org/wikipedia/commons/5/5a/Ardea_cinerea_qtl3.jpg",
    },
    suliformes: {
        id: "suliformes",
        name_latin: "Suliformes",
        name_sv: "Sulfåglar",
        families: [families.sulidae, families.phalacrocoracidae],
        image:
            "https://upload.wikimedia.org/wikipedia/commons/2/2d/Morus_bassanus_adu.jpg",
    },
    accipitriformes: {
        id: "accipitriformes",
        name_latin: "Accipitriformes",
        name_sv: "Hökfåglar",
        families: [families.pandionidae, families.accipitridae],
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%D0%91%D0%B5%D1%80%D0%BA%D1%83%D1%82_%28Aquila_chrysaetos%29.jpg/1024px-%D0%91%D0%B5%D1%80%D0%BA%D1%83%D1%82_%28Aquila_chrysaetos%29.jpg",
    },
    apodiformes: {
        id: "apodiformes",
        name_latin: "Aapodiformes",
        name_sv: "Seglar- och kolibrifåglar",
        families: [families.apodidae],
        image:
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Apus_apus_-Barcelona%2C_Spain-8_%281%29.jpg",
    },
    gruiformes: {
        id: "gruiformes",
        name_latin: "Gruiformes",
        name_sv: "Tran- och rallfåglar",
        families: [families.rallidae, families.gruidae],
        image:
            "https://upload.wikimedia.org/wikipedia/commons/4/45/%D0%96%D1%83%D1%80%D0%B0%D0%B2%D0%B5%D0%BB%D1%8C_%D1%81%D1%96%D1%80%D0%B8%D0%B9_%28Grus_grus%29.jpg",
    },
    charadriiformes: {
        id: "charadriiformes",
        name_latin: "Charadriiformes",
        name_sv: "Vadarfåglar",
        families: [
            families.haematopodidae,
            families.recurvirostridae,
            families.charadriidae,
            families.scolopacidae,
            families.laridae,
            families.stercorariidae,
            families.alcidae,
        ],
        image:
            "https://upload.wikimedia.org/wikipedia/commons/f/f6/SE_-_Stockholm_-_Chordata_-_Animalia_-_Charadriiformes_-_Aves_-_Laridae_%284891141690%29.jpg",
    },
    columbiformes: {
        id: "columbiformes",
        name_latin: "Columbiformes",
        name_sv: "Duvfåglar",
        families: [families.columbidae],
        image:
            "https://upload.wikimedia.org/wikipedia/commons/8/80/Columbiformes%401319.jpg",
    },
    cuculiformes: {
        id: "cuculiformes",
        name_latin: "Cuculiformes",
        name_sv: "Gökfåglar",
        families: [families.cuculidae],
        image:
            "https://upload.wikimedia.org/wikipedia/commons/2/25/Common_Cuckoo_%28Cuculus_canorus%29_%288079424957%29.jpg",
    },
    strigiformes: {
        id: "strigiformes",
        name_latin: "Strigiformes",
        name_sv: "Ugglefåglar",
        families: [families.tytonidae, families.strigidae],
        image: "https://live.staticflickr.com/953/41933194831_5b7dc3ef91_b.jpg",
    },
    caprimulgiformes: {
        id: "caprimulgiformes",
        name_latin: "Caprimulgiformes",
        name_sv: "Skärrfåglar",
        families: [families.caprimulgidae],
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Caprimulgus_europaeus_1200x855.jpg/800px-Caprimulgus_europaeus_1200x855.jpg",
    },
    coraciiformes: {
        id: "coraciiformes",
        name_latin: "Coraciiformes",
        name_sv: "Praktfåglar",
        families: [families.alcedinidae],
        image:
            "https://upload.wikimedia.org/wikipedia/commons/e/e8/Alcedo_atthis%2C_Common_Kingfisher_.jpg",
    },
    piciformes: {
        id: "piciformes",
        name_latin: "piciformes",
        name_sv: "Hackspettartade fåglar",
        families: [families.picidae],
        image:
            "https://upload.wikimedia.org/wikipedia/commons/1/13/Jynx_torquilla_no_%28cropped%29.JPG",
    },
    falconiformes: {
        id: "falconiformes",
        name_latin: "Falconiformes",
        name_sv: "Falkfåglar",
        families: [families.falconidae],
        image:
            "https://upload.wikimedia.org/wikipedia/commons/2/21/Falco_peregrinus_-_01.jpg",
    },
    passeriformes: {
        id: "passeriformes",
        name_latin: "Passeriformes",
        name_sv: "Tättingar",
        families: [
            families.laniidae,
            families.oriolidae,
            families.corvidae,
            families.bombycillidae,
            families.paridae,
            families.remizidae,
            families.panuridae,
            families.alaudidae,
            families.hirundinidae,
            families.aegithalidae,
            families.phylloscopidae,
            families.acrocephalidae,
            families.megaluridae,
            families.sylviidae,
            families.regulidae,
            families.troglodytidae,
            families.sittidae,
            families.certhiidae,
            families.sturnidae,
            families.turdidae,
            families.muscicapidae,
            families.cinclidae,
            families.passeridae,
            families.prunellidae,
            families.motacillidae,
            families.fringillidae,
            families.emberizidae,
            families.calcariidae,
        ],
        image:
            "https://upload.wikimedia.org/wikipedia/commons/f/fb/Great-Tit.jpg",
    },
};

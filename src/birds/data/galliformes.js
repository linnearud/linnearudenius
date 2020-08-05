import { orders } from "./orders.js";
import { families } from "./families.js";
import { subfamilies } from "./subfamilies.js";
import { genera } from "./genera";

export const birds = [
    {
        id: "tetrastes-bonasia",
        order: orders.galliformes,
        family: families.phasianidae,
        subfamily: subfamilies.tetraoninae,
        genus: genera.tetrastes,
        name_sv: "Järpe",
        name_latin: "Tetrastes bonasia",
        name_en: "Hazel grouse",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/b/b5/Tetrastes_bonasia_%28cropped%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/3/36/Tetrastes_bonasia_3.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Bonasa_bonasia_-Bayerischer_Wald%2C_Europe-8a.jpg/640px-Bonasa_bonasia_-Bayerischer_Wald%2C_Europe-8a.jpg",
        ],
        characteristics_fageln:
            "Minst av våra skogshöns. Ca 35-40 cm. Vingspann ca 50-55 cm. Grå och brunspräcklig. På huvud, nacke och rygg finns mörka tvärstreck. Svart band ytterst på stjärten. Hanen har svart strupe.",
        spread_fageln:
            "I skogsområden från Småland och norrut. Vanligast i Norrland.",
        link_fageln: "https://fageln.se/arter/jaerpe.aspx",
        hunt:
            "https://jagareforbundet.se/jakt/jakttider/jakttid-for-enskilt-djur/?animalId=414",
    },
    {
        id: "lagopus-lagopus",
        order: orders.galliformes,
        family: families.phasianidae,
        subfamily: subfamilies.tetraoninae,
        genus: genera.lagopus,
        name_sv: "Dalripa",
        name_latin: "Lagopus lagopus",
        name_en: "Willow ptarmigan",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lagopus_lagopus_-_adult_%28Denali%2C_2010%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/0/00/Lagopus_lagopus_-Nome%2C_Alaska%2C_USA_-male-8.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Lagopus_lagopus_Alaska_1.jpg/1242px-Lagopus_lagopus_Alaska_1.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/f/fc/2014-04-21_Lagopus_lagopus_scotica%2C_Hawsen_Burn_1.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzByyCXGlY7TDW1m8DI0i2pfJDWpsDMtRk3fhQXbT2ZYviZE&s",
        ],
        characteristics_fageln:
            "Ca 35-40 cm. Vingspann 55-65 cm. På vintern helt vit förutom stjärten som är svart längst ut. Vår och sommar är den brunspräcklig. Vita vingar. Vit ögonring.",
        spread_fageln:
            "I fjällen men även i norrlands skogsland ut mot kusten och skärgården.",
        link_fageln: "https://fageln.se/arter/dalripa.aspx",
        hunt:
            "https://jagareforbundet.se/jakt/jakttider/jakttid-for-enskilt-djur/?animalId=373",
    },
    {
        id: "lagopus-muta",
        order: orders.galliformes,
        family: families.phasianidae,
        subfamily: subfamilies.tetraoninae,
        genus: genera.lagopus,
        name_sv: "Fjällripa",
        name_latin: "Lagopus muta",
        name_en: "Rock ptarmigan",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/1/1f/Rock_Ptarmigan_%28Lagopus_Muta%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/56/Alpenschneehuhn%2C_Lagopus_muta_4.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/f/f9/Lagopus_muta_-Iceland-8.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/6/68/Lagopus_muta_japonica_%28female%29.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Rock_Ptarmigan_-_Lagopus_muta_-_Asbyrgi%2C_Iceland_1.jpg/1024px-Rock_Ptarmigan_-_Lagopus_muta_-_Asbyrgi%2C_Iceland_1.jpg",
        ],
        characteristics_fageln:
            "Ca 30-35 cm. På vintern helt vit. Vår och sommar är den brungråspräcklig. I alla dräkter är stjärten svart. Hanen har svart streck mellan näbb och öga och röd kam ovanför ögat. Vita vingar.",
        spread_fageln: "På kalfjället.",
        link_fageln: "https://fageln.se/arter/fjaellripa.aspx",
        hunt:
            "https://jagareforbundet.se/jakt/jakttider/jakttid-for-enskilt-djur/?animalId=394",
    },
    {
        id: "lyrurus-tetrix",
        order: orders.galliformes,
        family: families.phasianidae,
        subfamily: subfamilies.tetraoninae,
        genus: genera.lyrurus,
        name_sv: "Orre",
        name_latin: "Lyrurus tetrix",
        name_en: "Black grouse",
        images: [
            "https://live.staticflickr.com/7039/7000190811_c48f2166ff_b.jpg",
            "https://p0.pikist.com/photos/314/644/black-grouse-bird-scotland-nature-lek.jpg",
        ],
        characteristics_fageln:
            "50 cm. Stor skogshönsfågel. Tuppens fjäderdräkt är glänsande blåsvart, klarröda valkar över ögonen och stjätren är lyrformad i svart på ovansidan ock vitt på undersidan. I flykten syns de rundade vita vingundersidorna och på den svarta ovansidan framträder tydligt ett vitt vingband. Hönan och ungfågeln är spräckligt gråbruna med en lätt kluven stjärt.",
        spread_fageln:
            "Mer eller mindre allmänt i södra Sverige, men blir mer och mer ovanlig ju längre upp i norr man kommer. Föredrar öppna skogsmarker såsom hedar, mossar och kalhyggen. Går ibland upp på grusade skogsvägar för att äta småsten som hjälp till matsmältningen",
        link_fageln: "https://fageln.se/art/orre.aspx",
        hunt:
            "https://jagareforbundet.se/jakt/jakttider/jakttid-for-enskilt-djur/?animalId=440",
    },
    {
        id: "tetrao-urogallus",
        order: orders.galliformes,
        family: families.phasianidae,
        subfamily: subfamilies.tetraoninae,
        genus: genera.tetrao,
        name_sv: "Tjäder",
        name_latin: "Tetrao urogallus",
        name_en: "Western capercaillie",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tetrao_urogallus_-_Eurasian_Capercaille_-_Tj%C3%A4der.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/1c/Tetrao_urogallus_%28cropped%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/59/Tetrao_urogallus%2C_Glenfeshie%2C_Scotland_1.jpg",
            "https://cdn.pixabay.com/photo/2012/10/09/03/06/capercaillie-60280_960_720.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/1c/Tetrao_urogallus_-Bayerischer_Wald%2C_Europe_-female-8a_%283%29.jpg",
        ],
        characteristics_fageln:
            "74–90 cm. Vingspann ca 115 cm. Honan ca 25 cm mindre. Vår största skogsfågel. Tupp och höna tydligt olika utseende. Tuppen svart intryck med blågrönt bröst och vita teckningar på vingknoge och bröst. Rött ögonbryn. Honan brunspräcklig med rödbrunt bröst.",
        spread_fageln:
            "I större barrskogar i hela landet upp till barrskogsgränsen i fjällen. Sommartid även uppe på högfjället.",
        link_fageln: "https://fageln.se/arter/tjaeder.aspx",
        hunt:
            "https://jagareforbundet.se/jakt/jakttider/jakttid-for-enskilt-djur/?animalId=474",
    },
    {
        id: "perdix-perdix",
        order: orders.galliformes,
        family: families.phasianidae,
        subfamily: subfamilies.perdicinae,
        genus: genera.perdix,
        name_sv: "Rapphöna",
        name_latin: "Perdix perdix",
        name_en: "Grey partridge",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/d/d7/Perdix_perdix_2_%28Marek_Szczepanek%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/6/62/Perdix_perdix_Sri_Mesh.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/6/6f/Perdix_perdix_%28Marek_Szczepanek%29.jpg",
            "https://live.staticflickr.com/3874/14355540010_d6e7a4bb82_b.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/3/34/Perdix_perdix_01.JPG",
        ],
        characteristics_fageln:
            "Ca 30 cm. Vingspann ca 45-80 cm. Brunaktig med gråare hals och nacke. Ljust bröst, buk och undersida. På bröstet en stor brun fläck som är tydligare på hanen än på honan. Ansiktet och strupen är brungula.",
        spread_fageln:
            "Fläckvis i södra delen av landet. I huvudsak i de sydligaste landskapen och östra Svealand. Tätast i Skåne.",
        link_fageln: "https://fageln.se/arter/rapphoena.aspx",
        hunt:
            "https://jagareforbundet.se/jakt/jakttider/jakttid-for-enskilt-djur/?animalId=446",
    },
    {
        id: "coturnix-coturnix",
        order: orders.galliformes,
        family: families.phasianidae,
        subfamily: subfamilies.perdicinae,
        genus: genera.coturnix,
        name_sv: "Vaktel",
        name_latin: "Coturnix coturnix",
        name_en: "Common quail",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Harlequin_Quail_%28Coturnix_delegorguei%29_%286035291347%29.jpg/800px-Harlequin_Quail_%28Coturnix_delegorguei%29_%286035291347%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/8/8d/Coturnix_coturnix_%28Lmbuga%29_%28cropped%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/a/a9/Coturnix_coturnix_%28cropped%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/e/ee/Coturnix_coturnix_%28Phasianidae%29_%28Common_Quail%29_-_%28second_calendar_year%29%2C_Meijendel%2C_the_Netherlands.jpg",
        ],
        characteristics_fageln:
            "18 cm. Vår minsta hönsfågel och den enda som flyttar. Har två tydliga gulbruna strimmor på huvudet. Gulbrunt bröst med strimmiga sidor. Tuppen har en svart haklapp",
        spread:
            "Sällsynt i större delen av landet där det finns klövervallar eller andra öppna fält med växande gröda.",
        link_fageln: "https://fageln.se/art/vaktel.aspx",
        hunt: "",
    },
    {
        id: "phasianus-colchicus",
        order: orders.galliformes,
        family: families.phasianidae,
        subfamily: subfamilies.phasianinae,
        genus: genera.phasianus,
        name_sv: "Fasan",
        name_latin: "Phasianus colchicus",
        name_en: "Common pheasant",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/d/d9/Common_pheasant_%28Phasianus_colchicus%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/2/24/Phasianus_colchicus_karpowi_2.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/d7/Phasianus_colchicus_%28Common_pheasant%29_female%2C_Texel%2C_the_Netherlands.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/e/e8/Phasianus_colchicus_female1.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/e/ed/Phasianus_colchicus_%28female%2925.jpg",
        ],
        characteristics_fageln:
            "65-90 cm. Tuppen omisskännlig med sina stora röda nakna partier på huvudsidorna. I övrigt metallskimrande i orangea färger. Honan brunspräcklig.",
        spread_fageln:
            "Häckar mer eller mindre allmänt i landets södra delar upp till norra delarna av Uppland. Förekommer mer sporadiskt längre norrut.",
        link_fageln: "https://fageln.se/art/fasan.aspx",
        hunt:
            "https://jagareforbundet.se/jakt/jakttider/jakttid-for-enskilt-djur/?animalId=389",
    },
];

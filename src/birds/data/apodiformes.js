import { orders } from "./orders.js";
import { families } from "./families.js";
import { subfamilies } from "./subfamilies.js";
import { genera } from "./genera";

export const birds = [
    {
        id: '',
        order: orders.apodiformes,
        family: families.apodidae,
        subfamily: subfamilies.apodinae,
        genus: genera.apus,
        name_sv: 'Tornseglare',
        name_latin: 'Apus apus',
        name_en: 'Common swift',
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Apus_apus_-Barcelona%2C_Spain-8_%281%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/0/06/Common_Swift_Apus_apus.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/African_Black_Swift_%28Apus_barbatus%29_in_flight%2C_above_and_side_view.jpg/873px-African_Black_Swift_%28Apus_barbatus%29_in_flight%2C_above_and_side_view.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/African_Black_Swift_%28Apus_barbatus%29_in_flight%2C_above_and_side_view.jpg/873px-African_Black_Swift_%28Apus_barbatus%29_in_flight%2C_above_and_side_view.jpg",
            "https://live.staticflickr.com/3892/14541236492_94629b8746_b.jpg",
        ],
        characteristics_fageln: '17-18.5 cm. Vingarna är smala och långa och kroppen spolfomig. Har helmörk undersida och endast strupen är ljus. De unga fåglarna har svartare grundfärg, ljus panna och tygel (vit fjäderbräm).',
        spread_fageln: 'Tillbringar den största delen av sitt liv i luften. Den förekommer över hela landet och då helst i samband med mänsklig bebyggelse. Den är dock ovanlig eller saknas i fjällen, i fjällbjörkskogen och i de yttre delarna av skärgården.',
        link_fageln: 'https://www.fageln.se/art/tornseglare.aspx',
        hunt: '',
    },
]


import { orders } from "./orders.js";
import { families } from "./families.js";
import { subfamilies } from "./subfamilies.js";
import { genera } from "./genera";

export const birds = [
    {
        id: "anser-anser",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.anserinae,
        genus: genera.anser,
        name_sv: "Grågås",
        name_latin: "Anser anser",
        name_en: "Greylag goose",
        images: [
            "https://cdn.pixabay.com/photo/2018/06/15/20/58/goose-3477674_1280.jpg",
            "https://cdn.pixabay.com/photo/2012/10/26/02/17/greylag-goose-63088_1280.jpg",
            "https://cdn.pixabay.com/photo/2018/06/21/01/21/geese-3487734_1280.jpg",
            "https://cdn.pixabay.com/photo/2020/03/15/09/19/flying-goose-4933006_1280.jpg",
        ],
        characteristics_fageln:
            "74 - 84 cm. Vingspann på 150 – 168 cm. Ljust huvud med kraftig näbb som är enfärgat ljust orange, samt skära ben. I flykten ser man att vingovansidorna är ljust gråaktiga. Dräkten för övrigt ganska enhetligt brungrå.",
        spread_fageln:
            "Såväl vid kusterna som i inlandet. Vanligast vi ostkusten från Blekinge upp till Gävlebukten. Mer sporadiska häckningar längre norrut och i Norrlands inland.",
        link_fageln: "https://www.fageln.se/art/gragas.aspx",
        hunt:
            "https://jagareforbundet.se/jakt/jakttider/jakttid-for-enskilt-djur/?animalId=408",
    },
    {
        id: "anser-fabalis",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.anserinae,
        genus: genera.anser,
        name_sv: "Sädgås",
        name_latin: "Anser fabalis",
        name_en: "Bean goose",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/c/c5/S%C3%A6dg%C3%A5s_%28Anser_fabalis%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/f/f2/Anser_fabalis_fabalis%2C_RSPB_Saltholme_2.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/50/Anser_fabalis_at_Beijing_zoo.jpg",
            "https://live.staticflickr.com/2137/2402278199_6ddd3cb43e_b.jpg",
        ],
        characteristics_fageln:
            "66 - 88 cm. Vingspann på 147 – 175 cm. Mörkt huvud och hals samt mörka vingar. Näbben orangegul med svart teckning på näbbroten och näbbspetsen. Benen orangea.",
        spread_fageln:
            "En utpräglad skogsfågel som häckar i och kring de stora myrområdena i norra Sverige.",
        link_fageln: "https://www.fageln.se/art/saedgas.aspx",
        hunt:
            "https://jagareforbundet.se/jakt/jakttider/jakttid-for-enskilt-djur/?animalId=471",
    },
    {
        id: "anser-brachyrhynchus",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.anserinae,
        genus: genera.anser,
        name_sv: "Spetsbergsgås",
        name_latin: "Anser brachyrhynchus",
        name_en: "Pink-footed goose",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/f/fe/Anser_brachyrhynchus.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/a/a1/Anser_brachyrhynchus_%28Norway%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/2015-03-10_Anser_brachyrhynchus%2C_Gosforth_Park_1.jpg/640px-2015-03-10_Anser_brachyrhynchus%2C_Gosforth_Park_1.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/c/c8/Anser_brachyrhynchus_1.jpg",
            "https://live.staticflickr.com/8365/8527829335_203b9ba88a_b.jpg",
        ],
        characteristics_fageln:
            "Ca 60-70 cm. Vingspann ca 130-170 cm. Ljust gråblå ovansida. Mörkare huvud och ganska kort hals och näbb. Ljus stjärt. Rosafärgade fötter.",
        spread_fageln:
            "Spetsbergsgås observeras ganska sällsynt i Sverige. Den flyttar delvis genom landet september-oktober respektive april-maj.",
        link_fageln: "https://www.fageln.se/arten/spetsbergsgas.aspx",
        hunt: "",
    },
    {
        id: "anser-albifrons",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.anserinae,
        genus: genera.anser,
        name_sv: "Bläsgås",
        name_latin: "Anser albifrons",
        name_en: "Greater white-fronted goose",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/f/f2/Anser_albifrons_albifrons.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/c/c7/Anser_albifrons_albifrons_Swallow_Pond_2.jpg",
            "https://live.staticflickr.com/1972/31490612398_aefb466d85_b.jpg",
        ],
        characteristics_fageln:
            "66 - 76 cm. En iögonfallande vit panna samt kraftigt tvärbandad undersida. Ungfåglarna saknar dessa karaktärsdrag under sitt första levnadsår och kan då vara svåra att skilja åt från sädgås och grågås men unga bläsgäss har ett ljusare huvud med en helt skär näbb. i grått.",
        spread_fageln:
            "Häckar ej i Sverige. Syns endast under flyttningen mellan norra Sibiriens arktiska kuster till Nordsjöns kuster då de mellanlandar i södra delarna av landet.",
        link_fageln: "https://www.fageln.se/art/blaesgas.aspx",
        hunt:
            "https://jagareforbundet.se/jakt/jakttider/jakttid-for-enskilt-djur/?animalId=369",
    },
    {
        id: "anser-erythropus",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.anserinae,
        genus: genera.anser,
        name_sv: "Fjällgås",
        name_latin: "Anser erythropus",
        name_en: "Lesser white-fronted goose",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Anser_erythropus.jpg/871px-Anser_erythropus.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/Lesser_white_fronted_goose_%28Anser_erythropus%29_%285%29.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/d/d1/Lesser_white_fronted_goose_%28Anser_erythropus%29_%281%29.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/8/87/Lesser_white_fronted_goose_%28Anser_erythropus%29_%282%29.JPG",
        ],
        characteristics_fageln:
            "Liten gås. Ca 55-65 cm. Vingspann ca 120-135 cm. Gul tunn ring (orbitalring) runt ögat. Vit fläck i pannan, svarta streck över buken och vit undergump. I övrigt mörk gråbrun fjäderdräkt.",
        spread_fageln:
            "Sällsynt i de nordligaste fjällområdena. Rastar i södra Norrland och i mellansverige under flyttningen.",
        link_fageln: "https://fageln.se/arten/fjaellgas.aspx",
        hunt: "",
    },
    {
        id: "branta-canadensis",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.anserinae,
        genus: genera.branta,
        name_sv: "Kanadagås",
        name_latin: "Branta canadensis",
        name_en: "Canada Goose",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/5/57/Branta_canadensis_DSC03376.JPG",
            "https://live.staticflickr.com/652/31468577463_b51f63dce6_b.jpg",
            "https://cdn.pixabay.com/photo/2020/05/07/14/32/canada-goose-5141748_960_720.jpg",
            "https://live.staticflickr.com/8247/8648145588_6425e290ef_b.jpg",
        ],
        characteristics_fageln:
            "90-110 cm. Den största gåsen som häckar i Sverige. Känns lätt igen på sin storlek, sin långa svarta hals, och sina vita kinder. Har i övrigt en brunaktig fjäderdräkt.",
        spread_fageln:
            "Spridd över större delen av södra landet, samt längs med Norrlandskusten och sporadiskt även inne i Norrland. Ökar snabbt i Sverige och kan snart finnas lite varstans nedanför fjällkedjan.",
        link_fageln: "https://www.fageln.se/art/kanadagas.aspx",
        hunt:
            "https://jagareforbundet.se/jakt/jakttider/jakttid-for-enskilt-djur/?animalId=421",
    },
    {
        id: "branta-leucopsis",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.anserinae,
        genus: genera.branta,
        name_sv: "Vitkindad gås",
        name_latin: "Branta leucopsis",
        name_en: "Barnacle goose",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/c/cb/Branta_leucopsis_D81_8150_%2840856701814%29.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKhxtf1eVK1NYYhEwYc0fa7NTjPKfAJH-p8EkWSXS3SkolR8w&s",
            "https://live.staticflickr.com/896/39647252450_2a64cccdaf_b.jpg",
            "https://farm5.staticflickr.com/4193/34252554580_e645f03af8_b.jpg",
        ],
        characteristics_fageln:
            "58-69 cm. Helt vitt ansikte med svart hjässa, nacke och hals.",
        spread_fageln:
            "I huvudsak på Gotland, Öland och längs med våra kuster. Har även börjat etablera sig i mindre kolonier längre in i landet.",
        link_fageln: "https://fageln.se/art/vitkindad-gas.aspx",
        hunt:
            "https://jagareforbundet.se/jakt/jakttider/jakttid-for-enskilt-djur/?animalId=489",
    },
    {
        id: "branta-bernicla",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.anserinae,
        genus: genera.branta,
        name_sv: "Prutgås",
        name_latin: "Branta bernicla",
        name_en: "Brent goose",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/3/3f/Branta_bernicla_-Iceland-8.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/e/ef/Brant_%28Branta_bernicla%29_RWD4.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/9/98/Black_Brant_-_Branta_bernicla_nigricans.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/4/47/Brent_goose_%28Branta_bernicla%29_in_flight_2.jpg",
        ],
        characteristics_fageln:
            '56 - 61 cm. En av våra minsta gäss. Knappt som en ejder. Mörk, grå-svart gås med en vit "öppen" ring på den svarta halsen. Det vita saknas dock hos ungfåglar. I övrigt brunsvart buk med vitt akterparti.',
        spread_fageln:
            "Häckar ej i Sverige men passerar i stora antal under flyttningen mellan östra Sibirien och Brittiska öarna.",
        link_fageln: "https://fageln.se/art/prutgas.aspx",
        hunt: "",
    },
    {
        id: "anas-platyrhynchos",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.anatinae,
        genus: genera.anas,
        name_sv: "Gräsand",
        name_latin: "Anas platyrhynchos",
        name_en: "Mallard",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg",
            "https://p0.pikist.com/photos/134/315/mallard-duck-anas-platyrhynchos-water-bird-bird-animal-world-nature-animal-feather.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGhti9rJPb-3WmHlMehuvCbyDtjOTX-7l40O5VpHWO4aZKkKA&s",
            "https://p2.piqsels.com/preview/459/239/699/mallard-duck-female-mallard-anas-platyrhynchos.jpg",
            "https://cdn.pixabay.com/photo/2018/06/22/04/40/mallard-3489981_1280.jpg",
        ],
        characteristics_fageln:
            "50-65 cm. Den största och kraftigaste bland simänderna. Hanen är från okt.-maj mycket typisk med glänsande grönt huvud, brunt bröst, grå kropp och svart gump. Stjärten är vit, men två av de mellersta stjärtpenneparen är svarta och något upprullade. Honan har mer brunaktig dräkt, men gemensamt för båda könen är en blå vingspegel kantad av smal vit bård.",
        spread_fageln:
            "I alla typer av vatten, från små nästan igenvuxna dammar till stora sjöar och skärgård. Trivs bäst i vatten med stora vassar och rikligt med fräken. Arten finns i hela landet, dock vanligast i de södra och mellersta delarna.",
        link_fageln: "https://www.fageln.se/art/graesand.aspx",
        hunt:
            "https://jagareforbundet.se/jakt/jakttider/jakttid-for-enskilt-djur/?animalId=408",
    },
    {
        id: "anas-crecca",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.anatinae,
        genus: genera.anas,
        name_sv: "Kricka",
        name_latin: "Anas crecca",
        name_en: "Eurasian teal",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/d/de/Teal_Anas_crecca_%2833675784246%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/c/c0/Eurasian_teal_%28Anas_crecca%29_Photograph_by_Shantanu_Kuveskar.jpg",
            "https://p0.pikist.com/photos/746/749/eurasian-teal-anas-crecca-duck-dabbling-duck-wildlife-waterfowl-migratory-nature-bird.jpg",
            "https://p0.pikist.com/photos/241/378/eurasian-teal-anas-crecca-duck-dabbling-duck-wildlife-waterfowl-migratory-nature-bird.jpg",
        ],
        characteristics_fageln:
            "35 cm. Vår minsta and. Ungefär hälften så stor som en gräsand. Hannen vackert färgad med ett brunt huvud och en grönskimrande rand från ögat till bak i nacken. I övrigt gråvit med tunna svarta linjer och fläckar på bröst och sidor. Undergumpen är gul. Vingspegeln skimrar i grönt. Honan liknar mycket en gräsandhona i miniatyr. Under hösten och vintern får även hannarna denna brunspräckliga dräkt.",
        spread_fageln:
            "Finns i hela landet från norr till söder. Är vanligast i sjöar och småvatten i de skogsdominerande områderna.",
        link_fageln: "https://fageln.se/art/kricka.aspx",
        hunt:
            "https://jagareforbundet.se/jakt/jakttider/jakttid-for-enskilt-djur/?animalId=428",
    },
    {
        id: "anas-penelope",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.anatinae,
        genus: genera.anas,
        name_sv: "Bläsand",
        name_latin: "Anas penelope",
        name_en: "Eurasian wigeon",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/5/54/Anas_penelope_male_s3.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/4/46/Anas_penelope_beijing.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/d6/Eurasian_Wigeon_%28Anas_penelope%29_RWD2.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/9/90/Eurasian_Wigeon_%28Anas_penelope%29_RWD4.jpg",
        ],
        characteristics_fageln:
            "45 - 51 cm. Hanen i praktdräkt en iögonfallande gulaktig pannbläs. Ljust vinrött bröst. Grå näbb med svart spets.",
        spread_fageln:
            "Häckar spritt över hela landet men övervägande häckar i de norra delarna.",
        link_fageln: "https://fageln.se/art/blaesand.aspx",
        hunt:
            "https://jagareforbundet.se/jakt/jakttider/jakttid-for-enskilt-djur/?animalId=365",
    },
    {
        id: "aythya-fuligula",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.aythyinae,
        genus: genera.aythya,
        name_sv: "Vigg",
        name_latin: "Aythya fuligula",
        name_en: "Tufted duck",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/4/41/Aythya-fuligula_Tufted-Duck.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/4/49/Aythya_fuligula_EM1B0926_%2839312736600%29.jpg",
            "https://s0.geograph.org.uk/geophotos/05/72/31/5723183_ee39b6e5.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Tufted_Pochard_Aythya_fuligula_%282%29._Female..JPG/1280px-Tufted_Pochard_Aythya_fuligula_%282%29._Female..JPG",
        ],
        characteristics_fageln:
            "43 cm. Hanen är den enda simfågeln med en hängande svart nacktofs, och känns även lätt igen på avstånd genom den starka kontrasten mellan den svarta översidan och de vita sidorna. Honan har en kort tofs, är huvudsakligen brun och ibland syns ett vitt band vid näbbroten. Viggen dyker ofta och kommer vanligtvis upp på samma plats som den dök.",
        spread_fageln:
            "Har en mycket vidsträckt utbredning från slättbygderna i Skåne till myrområderna i Torne lappmark. Förekomsterna är dock mest koncentrerade till landets östra delar.",
        link_fageln: "https://fageln.se/art/vigg.aspx",
        hunt:
            "https://jagareforbundet.se/jakt/jakttider/jakttid-for-enskilt-djur/?animalId=484",
    },
    {
        id: "bucephala-clangula",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.merginae,
        genus: genera.bucephala,
        name_sv: "Knipa",
        name_latin: "Bucephala clangula",
        name_en: "Common goldeneye",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/3/34/Common_Goldeneye_%28Bucephala_clangula%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/9/99/Common_Goldeneye_%28Bucephala_clangula%29_RWD2.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/59/Common_Goldeneye_%28Bucephala_clangula%29-_female.jpg",
            "https://live.staticflickr.com/65535/50022902122_cce8ee9b9d_b.jpg",
        ],
        characteristics_fageln:
            "40 - 48 cm. Vit med svart rygg. Ett trekantigt svart-grönt huvud med en rund vit fläck vid näbbroten. Honan grå med brunt huvud.",
        spread_fageln:
            "Vid alla typer av sötvatten, men verkar föredra måttligt djupa sjöar och dammar med gles förekoms av vattenväxter.",
        link_fageln: "https://fageln.se/art/knipa.aspx",
        hunt:
            "https://jagareforbundet.se/jakt/jakttider/jakttid-for-enskilt-djur/?animalId=425",
    },
    {
        id: "clangula-hyemalis",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.merginae,
        genus: genera.clangula,
        name_sv: "Alfågel",
        name_latin: "Clangula hyemalis",
        name_en: "Long-tailed duck",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/7/72/Clangula_hyemalis_Hokkaido25_%28cropped%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/2/21/Clangula_hyemalis.jpg",
            "https://live.staticflickr.com/7608/27232563424_2ffb411acd_b.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Clangula-hyemalis-011.jpg/1280px-Clangula-hyemalis-011.jpg",
            "https://live.staticflickr.com/7374/13667635193_269ff3401e_b.jpg",
        ],
        characteristics_fageln:
            "Liten and. Ca 40-45 cm. Vingspann ca 65-80 cm. Vuxna hanar har 10-15 cm förlängda stjärtpennor. Kort knubbig näbb. Brokig täckning i vitt brunt och svart.",
        spread_fageln: "Häckar i fjällen, övervintrar till havs.",
        link_fageln: "https://fageln.se/arter/alfagel.aspx",
        hunt:
            "https://jagareforbundet.se/jakt/jakttider/jakttid-for-enskilt-djur/?animalId=361",
    },
    {
        id: "tadorna-tadorna",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.tadorninae,
        genus: genera.tadorna,
        name_sv: "Gravand",
        name_latin: "Tadorna tadorna",
        name_en: "Common shelduck",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/e/ea/Common_Shelduck_%28Tadorna_tadorna%29_at_Sylvan_Heights.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Tadorna_tadorna_%28aka%29.jpg/1024px-Tadorna_tadorna_%28aka%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/18/Volpoca_%28Tadorna_tadorna%29_DSC8313.jpg",
        ],
        characteristics_fageln:
            "61 cm. En mycket stor and, med ett mörkt grönsvart huvud, röd näbb och ett rödbrunt bröstband.",
        spread_fageln: "Ganska allmän runt södra Sveriges kuster.",
        link_fageln: "https://fageln.se/art/gravand.aspx",
        hunt: "",
    },
    {
        id: "anas-querquedula",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.anatinae,
        genus: genera.spatula,
        name_sv: "Årta",
        name_latin: "Anas querquedula",
        name_en: "Garganey",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/a/a9/Garganey_%28Anas_querquedula%29_RWD3.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/6/60/Anas_querquedula%2C_Slottsskogen%2C_G%C3%B6teborg%2C_Sweden_1.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/f/fc/Garganey_%28Anas_querquedula%29_in_AP_W_IMG_2844.jpg",
            "https://live.staticflickr.com/8317/28410475192_75403aa811_b.jpg",
        ],
        characteristics_fageln:
            "37 – 41 cm. En liten and med förhållandevis bastant näbb. Hannen i praktdräkt har ett bländande vitt ögonbrynsstreck. På närmare håll kan man se att en del av skulderfjädrarna är förlängda och hänger över vingen. I flykt ses den grågröna vingspegeln som är markerat med vitt. Honan brunspräcklig likt övriga simänder men har mer kontrastrikt huvud med en gråvit haka och strupe.",
        spread_fageln:
            "Häckar sparsamt till sällsynt i södra och mellersta Sverige samt längs med Norrlandskusten.",
        link_fageln: "https://fageln.se/art/arta.aspx",
        hunt: "",
    },
    {
        id: "anas-clypeata",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.anatinae,
        genus: genera.spatula,
        name_sv: "Skedand",
        name_latin: "Anas clypeata",
        name_en: "Northern shoveler",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/a/a1/Northern_Shoveler-Anas_clypeata.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/f/fd/Northern_Shoveller_Anas_clypeata.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/57/Northern_Shoveler-Anas_clypeata_female.jpg",
            "https://cdn.pixabay.com/photo/2015/09/05/15/33/northern-shoveler-924456_960_720.jpg",
        ],
        characteristics_fageln:
            "51 cm. Stor och framtill väldigt bred näbb. Hannen har vitt bröst med rödbruna sidor och ljusblå framkant på vingarna. Honan brunspräclkig.",
        spread_fageln:
            "Häckar sällsynt till sparsamt i södra delarna av Sverige med en viss koncentration till de östra delarna. I Norrland förekommer den mycket sällsynt.",
        link_fageln: "https://fageln.se/art/skedand.aspx",
        hunt: "",
    },
    {
        id: "anas-strepera",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.anatinae,
        genus: genera.mareca,
        name_sv: "Snatterand",
        name_latin: "Anas strepera",
        name_en: "Gadwall",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/2/21/Anas_strepera_M_F.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/d/d1/Anas-strepera-001.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/4/45/Anas_strepera_00891t.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/d4/Anas_strepera_06292.JPG",
        ],
        characteristics_fageln:
            "51 cm. Den mest anspråkslöst färgade av våra änder. Till största delen grå eller brunspräcklig, men har svarta stjärttäckare som brukar synas tydligt. Buken är vit och på vingarna syns svarta, vita och bruna teckningar. Näbben hos hannen i praktdräkt grå, medan den hos honan är mörk med ljus orangefärgada sidor.",
        spread_fageln:
            "I huvudsak längs med Östersjökusten från Öland i söder till Uppland i norr. Längs Västkusten betydligt sällsyntare. Lokalt häckar snatteranden även i södra Sveriges inland.",
        link_fageln: "https://fageln.se/art/snatterand.aspx",
        hunt: "",
    },
    {
        id: "anas-acuta",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.anatinae,
        genus: genera.anas,
        name_sv: "Stjärtand",
        name_latin: "Anas acuta",
        name_en: "Northern pintail",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/9/98/Anas_acuta_-Westham_Island_-Canada-8b.jpg",
            "https://p0.pikist.com/photos/270/104/pintail-northern-pintail-anas-acuta-duck-bird-female-dabbling-lake-pool.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/f/f7/Northern_Pintail_%28Anas_acuta%29_RWD3.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Anas_acuta_2005.01.10-10.18.52.jpg/640px-Anas_acuta_2005.01.10-10.18.52.jpg",
        ],
        characteristics_fageln:
            "Ganska stor and. Ca 50-60 cm. Vingspann ca 80-90 cm. Hanen känns i häckningsdräkt lätt igen på huvudets och halsens chokladbruna färg, mot Vilken de vita kilarna på halsens sidor skarpt kontrasterar, samt på den långa och sylvassa stjärten. Honan liknar mycket en gräsandhona men är slankare och ljusare samt har grå näbb, otydlig vingspegel och spetsig stjärt.",
        spread_fageln:
            "Häckar sällsynt. Minst ovanlig på Öland och Gotland samt vid norra norrlandskusten och i fjällen.",
        link_fageln: "https://fageln.se/arten/stjaertand.aspx",
        hunt: "",
    },
    {
        id: "aythya-ferina",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.aythyinae,
        genus: genera.aythya,
        name_sv: "Brunand",
        name_latin: "Aythya ferina",
        name_en: "Common pchard",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/c/c7/Aythya_ferina_Finsbury_1.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/e/e1/Common_Pochard_Aythya_ferina_non-breeding_by_Dr._Raju_Kasambe_DSCN9541_%282%29.jpg",
            "https://live.staticflickr.com/7888/47555410891_59e6cec4a1_b.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/2/24/Common_Pochard_Aythya_ferina_non-breeding_by_Dr._Raju_Kasambe_DSCN9541_%281%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/5c/Aythya_ferina_Sandwell_2.jpg",
        ],
        characteristics_fageln:
            "45 cm. Hannen jämnt ljusgrå med brunt huvud, svart bröst och svart vid stjärtroten. Honan mer diskret färgad i brunt och grått.",
        spread_fageln:
            "Häckar sparsamt i hela Sverige men mer koncentrerat i landets östra delar.",
        link_fageln: "https://fageln.se/art/brunand.aspx",
        hunt: "",
    },
    {
        id: "aythya-marila",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.aythyinae,
        genus: genera.aythya,
        name_sv: "Bergand",
        name_latin: "Aythya marila",
        name_en: "Greater scaup",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/5/5b/Scaup%2C_Aythya_marila%2C_Tj%C3%B6rnin_Pond%2C_Reykjavik.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/c/c0/Aythya_marila_nearctica_F_1Y_Ontario.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/7/72/Greater_Scaup_%28Aythya_marila%29_RWD4.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/f/f4/Aythya_marila_male.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/a/af/Aythya_marila_-New_Jersey_-USA_-male_and_female-8.jpg",
        ],
        characteristics_fageln:
            "Ca 40-50 cm. Vingspann ca 70-80 cm. Hanen har svart huvud, bröst och stjärtparti. Vit på sidan och grå rygg. Hanens vinterdräkt är mindre kontrastrik än häcknngsdräkten. Honan är brun med mörkare rygg och ljus vid näbbroten.",
        spread_fageln:
            "Framför allt i fjällen, men förekommer även vid Östersjöns kust. Vissa övervintrar vid Västkusten och kring Gotland.",
        link_fageln: "https://fageln.se/arten/bergand.aspx",
        hunt: "",
    },
    {
        id: "somateria-mollissima",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.merginae,
        genus: genera.somateria,
        name_sv: "Ejder",
        name_latin: "Somateria mollissima",
        name_en: "Common eider",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/2/2c/Somateria_mollissima_%28cropped%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/3/38/Somateria_mollissima_male_female.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Common_eider_%28Somateria_mollissima_mollissima%29_male_eclipse_plumage.jpg/1599px-Common_eider_%28Somateria_mollissima_mollissima%29_male_eclipse_plumage.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/6/6f/Somateria_mollissima_male..jpg",
        ],
        characteristics_fageln:
            "60 - 70 cm. Stor och tungt byggd and med kilformad näbb. Hanen övervägande vit med svart mage och sida. Grön nacke och nacksidor. Honan brun, mörkt tvärvattrad.",
        spread_fageln:
            "Extremt kustbunden, och häckar längs med våra kuster från syd till norr. Största beståndet finns i Stockholms skärgård.",
        link_fageln: "https://fageln.se/art/ejder.aspx",
        hunt:
            "https://jagareforbundet.se/jakt/jakttider/jakttid-for-enskilt-djur/?animalId=383",
    },
    {
        id: "melanitta-fusca",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.merginae,
        genus: genera.melanitta,
        name_sv: "Svärta",
        name_latin: "Melanitta fusca",
        name_en: "Velvet scoter",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/8/82/Melanitta_fusca_%28cropped%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/3/3d/Melanitta_fusca%2C_Grindavik%2C_Iceland_1.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/0/05/Melanitta_fusca_var_deglandi_f_Toronto.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/3/37/Melanitta_fusca_%2825611567557%29.jpg",
        ],
        characteristics_fageln:
            "Kraftig and. Ca 50-55 cm. Vingspann ca 80-100 cm. Hanen svart med vitt under ögat. Honan mörkt brun. Båda har vit fläck på vingen som syns i flykten.",
        spread_fageln:
            "Fjällsjöar samt vid havet i Halland och längs österjö- och norrlandskusten.",
        link_fageln: "https://fageln.se/arten/svaerta.aspx",
        hunt: "",
    },
    {
        id: "melanitta-nigra",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.merginae,
        genus: genera.melanitta,
        name_sv: "Sjöorre",
        name_latin: "Melanitta nigra",
        name_en: "Common scoter",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/9/9e/Melanitta_nigra_%28cropped%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/0/0a/Common_Scoter_Melanitta_nigra%2C_Hrafns%C3%B6nd%2C_Iceland_%28crop%29.jpg",
            "https://live.staticflickr.com/8518/8528925602_4f6ce98d3a_z.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/0/0b/M%C3%A4nnliche_Trauerente_%28Melanitta_nigra%29_-_Spiekeroog%2C_Nationalpark_Nieders%C3%A4chsisches_Wattenmeer.jpg",
        ],
        characteristics_fageln:
            "Ca 50 cm. Vingspann ca 70-80 cm. Hanen är svart och har en liten knöl vid näbbroten. Honan är brungrå med ljusare kinder och hals.",
        spread_fageln: "Häckar vid fjällsjöar, övervintrar till havs.",
        link_fageln: "https://fageln.se/arten/sjoeorre.aspx",
        hunt:
            "https://jagareforbundet.se/jakt/jakttider/jakttid-for-enskilt-djur/?animalId=456",
    },
    {
        id: "mergellus-albellus",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.merginae,
        genus: genera.mergellus,
        name_sv: "Salskrake",
        name_latin: "Mergellus albellus",
        name_en: "Smew",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/7/78/Smew_%28Mergellus_albellus%29_%281%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/a/ab/Mergellus_albellus%2C_Zevenhuizen%2C_Texel%2C_Netherlands_1.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Mergellus_albellus%2C_Killingworth_Lake%2C_Northumberland_6.jpg/1280px-Mergellus_albellus%2C_Killingworth_Lake%2C_Northumberland_6.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/8/8c/Female_Smew_%286378287829%29.jpg",
        ],
        characteristics_fageln:
            "Ca 40 cm. Vingspann ca 55-70 cm. Hanen omisskännlig kritvit dräkt svart på ryggen och tunna svarta streck. Honan och ungfåglar är grå med vit kind och rödbrun nacke och hjässa. Båda har svart runt ögat.",
        spread_fageln:
            "Häckar i Lappland. Vissa övervintrar vid kusten i södra Sverige.",
        link_fageln: "https://fageln.se/arten/salskrake.aspx",
        hunt: "",
    },
    {
        id: "mergus-serrator",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.merginae,
        genus: genera.mergus,
        name_sv: "Småskrake",
        name_latin: "Mergus serrator",
        name_en: "Red-breasted merganser",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/2/20/Mergus_serrator_in_water_08.jpg",
            "https://live.staticflickr.com/7030/6727818181_313f94f098_b.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/df/Mergus_serrator_M_F_Toronto.JPG",
            "https://live.staticflickr.com/2025/2111434891_745aa24c46_b.jpg",
            "https://storage.needpix.com/rsynced_images/red-breasted-merganser-270321_1280.jpg",
        ],
        characteristics_fageln:
            "58 cm. Något mindre än storskraken. Båda könen har förlängda hjässfjädrar som bildar en stripig tofs i nacken. Honans bruna huvud övergår diffust till halsens och ryggens gråvita färg. Hanen har brunt bröstparti som är längs-streckat i svart.",
        spread_fageln:
            "De flsesta häckningarna sker längs våra kuster, men den förekommer även vid näringsfattiga sjöar och vattendrag. Finns spridd i praktiskt taget hela landet.",
        link_fageln: "https://fageln.se/art/smaskrake.aspx",
        hunt:
            "https://jagareforbundet.se/jakt/jakttider/jakttid-for-enskilt-djur/?animalId=461",
    },
    {
        id: "mergus-merganser",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.merginae,
        genus: genera.mergus,
        name_sv: "Storskrake",
        name_latin: "Mergus Merganser",
        name_en: "Common merganser",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXvXm4npUcQDPhwPJ6y6KNEGYcDE8aXB6Zn1d7bZXsrCFeuKeb&s",
            "https://upload.wikimedia.org/wikipedia/commons/9/95/Mergus_merganser.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/a/ab/Mergus_merganser_qtl1.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCV8vBUN0g3sGOHV5-VbzOtaJ9K2C1K212KhK6_jarwOw-nXJi&s",
            "https://live.staticflickr.com/5293/5561922560_3d480f3678_b.jpg",
        ],
        characteristics_fageln:
            "66 cm. Långa spetsig näbb som slutar med en hake. Hannen mycket ljus med svart ryggdok och grönsvart huvud. Honan har ett skarpt avsatt brunt huvud som kontrasterar mot den ljusa halsen. Vit haklapp. I övrigt gråtecknad.",
        spread_fageln:
            "Häckar över större delen av landet med en viss koncentration längs med ostkusten.",
        link_fageln: "https://fageln.se/art/storskrake.aspx",
        hunt:
            "https://jagareforbundet.se/jakt/jakttider/jakttid-for-enskilt-djur/?animalId=469",
    },
    {
        id: "cygnus-olor",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.anserinae,
        genus: genera.cygnus,
        name_sv: 'Knölsvan',
        name_latin: 'Cygnus olor',
        name_en: 'Mute swan',
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/4/4f/Cygnus_olor.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSefi8ycu-km76blp7e8XRikQn8Cna--vHNjdnxAW3HI2-FyJs&s",
            "https://upload.wikimedia.org/wikipedia/commons/9/99/Cygnus_olor_Oulu_20160417.jpg",
            "https://p0.pikist.com/photos/115/441/mute-swan-swan-animal-bird-waterfowl-cygnus-olor-head-swan-head-bill.jpg",
        ],
        characteristics_fageln: "140-160cm. Vingspann på 200-240cm. Mycket stor fågel. Dräkten är vit med lång hals och litet huvud. Näbben är orangeröd med en framträdande svart knöl i pannan vid näbbroten. Honans knöl mindre än hanens. Ungfåglarna gråbruna första året. Kan uppträda aggressivt.",
        spread_fageln: "Häckar allmänt i näringsrika sjöar och dammar i södra och mellersta Sverige upp till Dalarna , Hälsingland, samt längs med våra kuster upp till norra Ångermanland.",
        link_fageln: "https://fageln.se/art/knoelsvan.aspx",
        hunt: '',
    },
    {
        id: "cygnus-cygnus",
        order: orders.anseriformes,
        family: families.anatidae,
        subfamily: subfamilies.anserinae,
        genus: genera.cygnus,
        name_sv: 'Sångsvan',
        name_latin: 'Cygnus cygnus',
        name_en: 'Whooper swan',
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/2/2a/Cygnus_cygnus_-United_Kingdom-8_%281%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/b/bd/Cygnus_cygnus_Reykjavik.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Cygnus_cygnus_EM1B1112_%2848969709787%29.jpg/1024px-Cygnus_cygnus_EM1B1112_%2848969709787%29.jpg",
            "https://live.staticflickr.com/65535/49999300241_cfb2b6fdb4_b.jpg",
        ],
        characteristics_fageln: "140-160 cm. Vingspann på 205-235 cm. Mycket stor fågel. Kilformad näbb med svart spets och gul näbbrot. Dräkten är vit med lång hals och litet huvud. Ungfåglarna är gråbruna första året.",
        spread_fageln: "Häckar spritt över hela Sverige från Skåne i söder till nordligaste Lappland.",
        link_fageln: "https://fageln.se/art/sangsvan.aspx",
        hunt: '',
    }
];

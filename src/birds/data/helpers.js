import { orders } from "./orders.js";
import { families } from "./families.js";
import { subfamilies } from "./subfamilies.js";
import { genera } from "./genera";

import { birds as accipitriformes } from "./accipitriformes";
import { birds as anseriformes } from "./anseriformes";
import { birds as apodiformes } from "./apodiformes";
import { birds as caprimulgiformes } from "./caprimulgiformes";
import { birds as charadriiformes } from "./charadriiformes";
import { birds as ciconiiformes } from "./ciconiiformes";
import { birds as columbiformes } from "./columbiformes";
import { birds as coraciiformes } from "./coraciiformes";
import { birds as cuculiformes } from "./cuculiformes";
import { birds as falconiformes } from "./falconiformes";
import { birds as galliformes } from "./galliformes";
import { birds as gaviiformes } from "./gaviiformes";
import { birds as gruiformes } from "./gruiformes";
import { birds as passeriformes } from "./passeriformes";
import { birds as pelecaniformes } from "./pelecaniformes";
import { birds as piciformes } from "./piciformes";
import { birds as podicipediformes } from "./podicipediformes";
import { birds as strigiformes } from "./strigiformes";
import { birds as suliformes } from "./suliformes";

const birdsByOrder = {
    accipitriformes,
    anseriformes,
    apodiformes,
    caprimulgiformes,
    charadriiformes,
    ciconiiformes,
    columbiformes,
    coraciiformes,
    cuculiformes,
    falconiformes,
    galliformes,
    gaviiformes,
    gruiformes,
    passeriformes,
    pelecaniformes,
    piciformes,
    podicipediformes,
    strigiformes,
    suliformes,
};

export const distinct = (value, index, self) => {
    return self.indexOf(value) === index;
};

export const ALL_BIRDS = Object.values(birdsByOrder).flat(1);
export const ORDERS = orders;
export const FAMILIES = families;
export const SUBFAMILIES = subfamilies;
export const GENERA = genera;

export const getBirdsByOrderId = (orderId) => birdsByOrder[orderId];
export const getBirdsByFamilyId = (familyId) =>
    ALL_BIRDS.filter((bird) => bird.family.id === familyId);
export const getBirdsBySubfamilyId = (subfamilyId) =>
    ALL_BIRDS.filter(
        (bird) => bird.subfamily && bird.subfamily.id === subfamilyId
    );
export const getBirdsByGeneraId = (genusId) =>
    ALL_BIRDS.filter((bird) => bird.genus.id === genusId);

export const getGeneraIdsBySubfamily = (subfamilyId) =>
    ALL_BIRDS.filter((bird) => bird.subfamily && bird.subfamily.id === subfamilyId)
        .map((bird) => bird.genus.id)
        .filter(distinct);

export const getGeneraIdsByFamily = (familyId) => 
    ALL_BIRDS.filter((bird) => bird.family.id === familyId)
        .map((bird) => bird.genus.id)
        .filter(distinct)

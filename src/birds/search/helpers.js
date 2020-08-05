import flexsearch from 'flexsearch'
import { ALL_BIRDS } from '../data/helpers.js'

export const createIndex = () => {
    const index = flexsearch.create();

    ALL_BIRDS.forEach(bird => {
        index.add(`${bird.id}_sv`, bird.name_sv)
        index.add(`${bird.id}_en`, bird.name_en)
        index.add(`${bird.id}_latin`, bird.name_latin)
    })

    return index;
}
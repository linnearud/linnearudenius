import {birds, groups} from './birds'

export const getGroups = () => groups

export const getBirds = () => birds

export const getBirdsFromGroup = (groupId) => {
    return birds.filter(bird => bird.group === groupId)
}

export const getBirdFromSlug = (slug) => {
    return birds.find(bird => bird.slug === slug)
}

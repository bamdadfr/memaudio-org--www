import {
    SET_ALBUMS,
} from './types'

export const setAlbums = (status) => ({
    'type': SET_ALBUMS,
    'payload': status,
})
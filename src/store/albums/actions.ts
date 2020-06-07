import {
    AlbumsState,
    AlbumsActionTypes,
    SET_ALBUMS,
} from './types'

// eslint-disable-next-line import/prefer-default-export
export const setAlbums = (status: AlbumsState['albums']): AlbumsActionTypes => ({
    'type': SET_ALBUMS,
    'payload': status,
})
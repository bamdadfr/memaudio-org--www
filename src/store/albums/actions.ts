import {
    // AlbumsState,
    AlbumsActionTypes,
    SET_ALBUMS,
} from './types'

// TODO: adapt to TS4
// export const setAlbums = (status: AlbumsState['albums']): AlbumsActionTypes => ({
export const setAlbums = (status: any): AlbumsActionTypes => ({
    'type': SET_ALBUMS,
    'payload': status,
})

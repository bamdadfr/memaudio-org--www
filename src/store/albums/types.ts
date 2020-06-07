export interface AlbumsState {
    albums: [string]
}

export const SET_ALBUMS = 'SET_ALBUMS'

interface SetAlbums {
    type: typeof SET_ALBUMS
    payload: AlbumsState['albums']
}

export type AlbumsActionTypes = SetAlbums
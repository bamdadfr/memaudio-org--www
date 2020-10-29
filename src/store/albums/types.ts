export interface AlbumsState {
    albums: [];
}

export const SET_ALBUMS = 'SET_ALBUMS'

interface SetAlbums {
    type: typeof SET_ALBUMS;
    // TODO: adapt to TS4
    // payload: AlbumsState['albums'];
    payload: any;
}

export type AlbumsActionTypes = SetAlbums
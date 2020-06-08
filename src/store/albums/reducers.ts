import {
    AlbumsState,
    AlbumsActionTypes,
    SET_ALBUMS,
} from './types'

const initState: AlbumsState = {
    'albums': [],
}

export default (
    state = initState,
    action: AlbumsActionTypes,
): AlbumsState => {

    switch (action.type) {

        case SET_ALBUMS:
            return {
                ...state,
                'albums': action.payload,
            }

        default:
            return state
    
    }

}
import {
    SET_ALBUMS,
} from './types'

const initState = {
    'albums': [],
}

export default (
    state = initState,
    action,
) => {

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
import {
    SET_PAGE_REDIRECT,
    SET_PAGE_TRANSITION,
} from './types'

const initState = {
    'redirect': null,
    'transition': false,
}

export default (state = initState, action) => {

    switch (action.type) {

        case SET_PAGE_REDIRECT:
            return {
                ...state,
                'transition': false,
                'redirect': action.payload,
            }

        case SET_PAGE_TRANSITION:
            return {
                ...state,
                'transition': action.payload,
            }

        default:
            return state

    }

}

import {
    GameState,
    GameActionTypes,
    SET_GAME_DIFFICULTY,
    SET_GAME_LOCKED,
    SET_GAME_DECK,
    SET_GAME_CARD,
    SET_GAME_CARDS,
    SET_GAME_CARDS_OPENED,
    SET_GAME_CARDS_MATCHED,
} from './types'

const initState: GameState = {
    'difficulty': 2,
    'locked': false,
    'ended': false,
    'deck': [],
    'card': 0,
    'cards': [],
    'cardsOpened': [],
    'cardsMatched': [],
}

export default (
    state = initState,
    action: GameActionTypes,
): GameState => {

    switch (action.type) {

        case SET_GAME_DIFFICULTY:
            return {
                ...state,
                'difficulty': action.payload,
            }

        case SET_GAME_LOCKED:
            return {
                ...state,
                'locked': action.payload,
            }
    
        case SET_GAME_DECK:
            return {
                ...state,
                'deck': action.payload,
            }
                    
        case SET_GAME_CARD:
            return {
                ...state,
                'card': action.payload,
            }
        
        case SET_GAME_CARDS:
            return {
                ...state,
                'cards': action.payload,
            }
                
        case SET_GAME_CARDS_OPENED:
            return {
                ...state,
                'cardsOpened': action.payload,
            }
                    
        case SET_GAME_CARDS_MATCHED:
            return {
                ...state,
                'cardsMatched': action.payload,
            }
                        
        default:
            return state
    
    }

}
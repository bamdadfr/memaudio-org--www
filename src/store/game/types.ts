export interface GameState {
    difficulty: number;
    locked: boolean;
    ended: boolean;
    deck: [];
    card: number;
    cards: [];
    cardsOpened: [];
    cardsMatched: [];
}

export const SET_GAME_DIFFICULTY = 'SET_GAME_DIFFICULTY'

interface SetGameDifficulty {
    type: typeof SET_GAME_DIFFICULTY;
    // TODO: adapt to TS4
    // payload: GameState['difficulty'];
    payload: any;
}

export const SET_GAME_LOCKED = 'SET_GAME_LOCKED'

interface SetGameLocked {
    type: typeof SET_GAME_LOCKED;
    // payload: GameState['locked'];
    payload: any;
}

export const SET_GAME_ENDED = 'SET_GAME_ENDED'

interface SetGameEnded {
    type: typeof SET_GAME_ENDED;
    // payload: GameState['ended'];
    payload: any;
}

export const SET_GAME_DECK = 'SET_GAME_DECK'

interface SetGameDeck {
    type: typeof SET_GAME_DECK;
    // payload: GameState['deck'];
    payload: any;
}

export const SET_GAME_CARD = 'SET_GAME_CARD'

interface SetGameCard {
    type: typeof SET_GAME_CARD;
    // payload: GameState['card'];
    payload: any;
}

export const SET_GAME_CARDS = 'SET_GAME_CARDS'

interface SetGameCards {
    type: typeof SET_GAME_CARDS;
    // payload: GameState['cards'];
    payload: any;
}

export const SET_GAME_CARDS_OPENED = 'SET_GAME_CARDS_OPENED'

interface SetGameCardsOpened {
    type: typeof SET_GAME_CARDS_OPENED;
    // payload: GameState['cardsOpened'];
    payload: any;
}

export const SET_GAME_CARDS_MATCHED = 'SET_GAME_CARDS_MATCHED'

interface SetGameCardsMatched {
    type: typeof SET_GAME_CARDS_MATCHED;
    // payload: GameState['cardsMatched'];
    payload: any;
}

export type GameActionTypes =
SetGameDifficulty
| SetGameLocked
| SetGameEnded
| SetGameDeck
| SetGameCard
| SetGameCards
| SetGameCardsOpened
| SetGameCardsMatched

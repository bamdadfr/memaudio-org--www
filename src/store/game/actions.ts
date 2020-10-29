import {
    // GameState,
    GameActionTypes,
    SET_GAME_DIFFICULTY,
    SET_GAME_LOCKED,
    SET_GAME_ENDED,
    SET_GAME_CARD,
    SET_GAME_CARDS,
    SET_GAME_DECK,
    SET_GAME_CARDS_OPENED,
    SET_GAME_CARDS_MATCHED,
} from './types'

// TODO: Adapt types to TS4
// export const setGameDifficulty = (status: GameState['difficulty']): GameActionTypes => ({
export const setGameDifficulty = (status: any): GameActionTypes => ({
    'type': SET_GAME_DIFFICULTY,
    'payload': status,
})

// export const setGameLocked = (status: GameState['locked']): GameActionTypes => ({
export const setGameLocked = (status: any): GameActionTypes => ({
    'type': SET_GAME_LOCKED,
    'payload': status,
})

// export const setGameEnded = (status: GameState['ended']): GameActionTypes => ({
export const setGameEnded = (status: any): GameActionTypes => ({
    'type': SET_GAME_ENDED,
    'payload': status,
})

// export const setGameCard = (status: GameState['card']): GameActionTypes => ({
export const setGameCard = (status: any): GameActionTypes => ({
    'type': SET_GAME_CARD,
    'payload': status,
})

// export const setGameCards = (status: GameState['cards']): GameActionTypes => ({
export const setGameCards = (status: any): GameActionTypes => ({
    'type': SET_GAME_CARDS,
    'payload': status,
})

// export const setGameDeck = (status: GameState['deck']): GameActionTypes => ({
export const setGameDeck = (status: any): GameActionTypes => ({
    'type': SET_GAME_DECK,
    'payload': status,
})

// export const setGameCardsOpened = (status: GameState['cardsOpened']): GameActionTypes => ({
export const setGameCardsOpened = (status: any): GameActionTypes => ({
    'type': SET_GAME_CARDS_OPENED,
    'payload': status,
})

// export const setGameCardsMatched = (status: GameState['cardsMatched']): GameActionTypes => ({
export const setGameCardsMatched = (status: any): GameActionTypes => ({
    'type': SET_GAME_CARDS_MATCHED,
    'payload': status,
})


import {
    GameState,
    GameActionTypes,
    SET_GAME_DIFFICULTY,
    SET_GAME_LOCKED,
    SET_GAME_CARD,
    SET_GAME_CARDS,
    SET_GAME_DECK,
    SET_GAME_CARDS_OPENED,
    SET_GAME_CARDS_MATCHED,
} from './types'

export const setGameDifficulty = (status: GameState['difficulty']): GameActionTypes => ({
    'type': SET_GAME_DIFFICULTY,
    'payload': status,
})

export const setGameLocked = (status: GameState['locked']): GameActionTypes => ({
    'type': SET_GAME_LOCKED,
    'payload': status,
})

export const setGameCard = (status: GameState['card']): GameActionTypes => ({
    'type': SET_GAME_CARD,
    'payload': status,
})

export const setGameCards = (status: GameState['cards']): GameActionTypes => ({
    'type': SET_GAME_CARDS,
    'payload': status,
})

export const setGameDeck = (status: GameState['deck']): GameActionTypes => ({
    'type': SET_GAME_DECK,
    'payload': status,
})

export const setGameCardsOpened = (status: GameState['cardsOpened']): GameActionTypes => ({
    'type': SET_GAME_CARDS_OPENED,
    'payload': status,
})

export const setGameCardsMatched = (status: GameState['cardsMatched']): GameActionTypes => ({
    'type': SET_GAME_CARDS_MATCHED,
    'payload': status,
})


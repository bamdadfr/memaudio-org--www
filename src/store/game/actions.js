import {
    SET_GAME_DIFFICULTY,
    SET_GAME_LOCKED,
    SET_GAME_ENDED,
    SET_GAME_CARD,
    SET_GAME_CARDS,
    SET_GAME_DECK,
    SET_GAME_CARDS_OPENED,
    SET_GAME_CARDS_MATCHED,
} from './types'

export const setGameDifficulty = (status) => ({
    'type': SET_GAME_DIFFICULTY,
    'payload': status,
})

export const setGameLocked = (status) => ({
    'type': SET_GAME_LOCKED,
    'payload': status,
})

export const setGameEnded = (status) => ({
    'type': SET_GAME_ENDED,
    'payload': status,
})

export const setGameCard = (status) => ({
    'type': SET_GAME_CARD,
    'payload': status,
})

export const setGameCards = (status) => ({
    'type': SET_GAME_CARDS,
    'payload': status,
})

export const setGameDeck = (status) => ({
    'type': SET_GAME_DECK,
    'payload': status,
})

export const setGameCardsOpened = (status) => ({
    'type': SET_GAME_CARDS_OPENED,
    'payload': status,
})

export const setGameCardsMatched = (status) => ({
    'type': SET_GAME_CARDS_MATCHED,
    'payload': status,
})


export const types = {
  SET_PAGE_REDIRECT: 'SET_PAGE_REDIRECT',
  SET_PAGE_TRANSITION: 'SET_PAGE_TRANSITION',
  SET_AUDIO_SRC: 'SET_AUDIO_SRC',
  SET_AUDIO_PLAYLIST: 'SET_AUDIO_PLAYLIST',
  SET_AUDIO_BACKGROUND: 'SET_AUDIO_BACKGROUND',
  SET_ALBUMS: 'SET_ALBUMS',
  SET_GAME_DIFFICULTY: 'SET_GAME_DIFFICULTY',
  SET_GAME_LOCKED: 'SET_GAME_LOCKED',
  SET_GAME_ENDED: 'SET_GAME_ENDED',
  SET_GAME_CARD: 'SET_GAME_CARD',
  SET_GAME_CARDS: 'SET_GAME_CARDS',
  SET_GAME_DECK: 'SET_GAME_DECK',
  SET_GAME_CARDS_OPENED: 'SET_GAME_CARDS_OPENED',
  SET_GAME_CARDS_MATCHED: 'SET_GAME_CARDS_MATCHED',
}

export const actions = {
  setPageRedirect: (status) => ({
    type: types.SET_PAGE_REDIRECT,
    payload: status,
  }),
  setPageTransition: (status) => ({
    type: types.SET_PAGE_TRANSITION,
    payload: status,
  }),
  setAudioSrc: (status) => ({
    type: types.SET_AUDIO_SRC,
    payload: status,
  }),
  setAudioPlaylist: (status) => ({
    type: types.SET_AUDIO_PLAYLIST,
    payload: status,
  }),
  setAudioBackground: (status) => ({
    type: types.SET_AUDIO_BACKGROUND,
    payload: status,
  }),
  setAlbums: (status) => ({
    type: types.SET_ALBUMS,
    payload: status,
  }),
  setGameEnded: (status) => ({
    type: types.SET_GAME_ENDED,
    payload: status,
  }),
  setGameDifficulty: (status) => ({
    type: types.SET_GAME_DIFFICULTY,
    payload: status,
  }),
  setGameLocked: (status) => ({
    type: types.SET_GAME_LOCKED,
    payload: status,
  }),
  setGameCard: (status) => ({
    type: types.SET_GAME_CARD,
    payload: status,
  }),
  setGameCards: (status) => ({
    type: types.SET_GAME_CARDS,
    payload: status,
  }),
  setGameDeck: (status) => ({
    type: types.SET_GAME_DECK,
    payload: status,
  }),
  setGameCardsOpened: (status) => ({
    type: types.SET_GAME_CARDS_OPENED,
    payload: status,
  }),
  setGameCardsMatched: (status) => ({
    type: types.SET_GAME_CARDS_MATCHED,
    payload: status,
  }),
}

export const initState = {
  page: {
    redirect: null,
    transition: false,
  },
  audio: {
    src: null,
    playlist: [],
    background: false,
  },
  albums: [],
  game: {
    difficulty: 2,
    locked: false,
    ended: false,
    deck: [],
    card: 0, // used as a counter
    cards: [],
    opened: [],
    matched: [],
  },
}

export default (state = initState, action) => {
  switch (action.type) {
    case types.SET_PAGE_REDIRECT:
      return {
        ...state,
        page: {
          ...state.page,
          transition: false,
          redirect: action.payload,
        },
      }
    case types.SET_PAGE_TRANSITION:
      return {
        ...state,
        page: {
          ...state.page,
          transition: action.payload,
        },
      }
    case types.SET_AUDIO_SRC:
      return {
        ...state,
        audio: {
          ...state.audio,
          src: action.payload,
        },
      }
    case types.SET_AUDIO_PLAYLIST:
      return {
        ...state,
        audio: {
          ...state.audio,
          playlist: action.payload,
        },
      }
    case types.SET_AUDIO_BACKGROUND:
      return {
        ...state,
        audio: {
          ...state.audio,
          background: action.payload,
        },
      }
      // ALBUMS
    case types.SET_ALBUMS:
      return {
        ...state,
        albums: [
          ...state.albums,
          action.payload,
        ],
      }
      // GAME
    case types.SET_GAME_DIFFICULTY:
      // Also resets the game
      return {
        ...state,
        game: {
          difficulty: action.payload,
          locked: false,
          ended: false,
          deck: [],
          card: 0, // used as a counter
          cards: [],
          opened: [],
          matched: [],
        },
      }
    case types.SET_GAME_LOCKED:
      return {
        ...state,
        game: {
          ...state.game,
          locked: action.payload,
        },
      }
    case types.SET_GAME_ENDED:
      return {
        ...state,
        game: {
          ...state.game,
          ended: action.payload,
        },
      }
    case types.SET_GAME_CARD:
      return {
        ...state,
        game: {
          ...state.game,
          card: action.payload,
        },
      }
    case types.SET_GAME_CARDS:
      return {
        ...state,
        game: {
          ...state.game,
          cards: action.payload,
        },
      }
    case types.SET_GAME_DECK:
      return {
        ...state,
        game: {
          ...state.game,
          deck: action.payload,
        },
      }
    case types.SET_GAME_CARDS_OPENED:
      return {
        ...state,
        game: {
          ...state.game,
          opened: action.payload,
        },
      }
    case types.SET_GAME_CARDS_MATCHED:
      return {
        ...state,
        game: {
          ...state.game,
          matched: action.payload,
        },
      }
    default:
      return state
  }
}

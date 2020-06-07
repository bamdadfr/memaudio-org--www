import { createStore } from 'redux'
// import { createStore, applyMiddleware } from 'redux'
// import { createLogger } from 'redux-logger'
import reducers from './reducers/index'

// Useless in production
// const logger = createLogger({
//   collapsed: (getState, action, logEntry) => !logEntry.error,
// })
// const store = createStore(reducers, applyMiddleware(logger))

const store = createStore (reducers)

export default store

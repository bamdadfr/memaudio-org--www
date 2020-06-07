import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import * as serviceWorker from './serviceWorker'
import LayerBackground from './components/app/LayerBackground'
import 'normalize.css'
import store from './store'
import App from './components/app/_App'

const Root = (): React.ReactElement => (
    <>
        <LayerBackground />
        <Provider store={store}>
            <App />
        </Provider>
    </>
)

const rootElement = document.getElementById ('root')

ReactDOM.render (<Root />, rootElement)

// serviceWorker.register()

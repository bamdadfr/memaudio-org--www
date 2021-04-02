import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { LayoutBackground } from './components/layout-background'
import 'normalize.css'
import { store } from './store'
import { App } from './components/app'

const Root = () => (
    <>
        <LayoutBackground/>
        <Provider store={store}>
            <App/>
        </Provider>
    </>
)

const rootElement = document.getElementById ('root')

ReactDOM.render (<Root/>, rootElement)

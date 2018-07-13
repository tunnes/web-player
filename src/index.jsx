import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'

import reducers from './main/reducers'

import Player from './web-player/web-player'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk)(createStore)(reducers, devTools)

const template = (
  <Provider store={store}>
    <Player />
  </Provider>
)

ReactDOM.render(template, document.getElementById('app'))

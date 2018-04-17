import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './app'
import reducer from './reducer'

const rootEl = document.getElementById('app')

const store = createStore(reducer)

const wrapApp = AppComponent =>
  <Provider store={store}>
    <AppContainer>
      <AppComponent />
    </AppContainer>
  </Provider>

render(wrapApp(App), rootEl)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    render(wrapApp(NextApp), rootEl)
  })
}

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import { install } from 'offline-plugin/runtime'

import App from './app'
import reducer from './reducer'

const rootEl = document.getElementById('app')

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

const wrapApp = AppComponent =>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </PersistGate>
  </Provider>

render(wrapApp(App), rootEl)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    render(wrapApp(NextApp), rootEl)
  })
}

if (process.env.NODE_ENV === 'production') {
  install()
}

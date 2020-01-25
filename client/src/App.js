import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Router from './Router'
import { theme } from './styles/theme'
import { getStore } from './store'

import './styles/reset.css'

const store = getStore()

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </Provider>
)

export default App

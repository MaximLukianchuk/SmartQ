import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { MainPage } from './pages/MainPage'
import { QueuePage } from './pages/QueuePage'

function App() {

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <MainPage />
        </Route>
        <Route path='/:id' >
          <QueuePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;

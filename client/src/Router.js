import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { MainPage } from "./pages/MainPage"
import { QueuePage } from "./pages/QueuePage"

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/:id">
        <QueuePage />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Router

import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import PersonagensScreen from "../views/HomeScreen/PersonagensScreen";

export default function Routes({ hist }) {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/">
          <PersonagensScreen />
        </Route>
      </Switch>
    </Router>
  );
}

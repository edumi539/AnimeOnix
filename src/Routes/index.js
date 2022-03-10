import React from "react";
import {
  Redirect,
  Route,
  Router,
  Switch,
  useRouteMatch
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import DetailScreen from "../views/DetailScreen/DetailScreen";
import PersonagensScreen from "../views/HomeScreen/PersonagensScreen";

export default function Routes({ hist }) {
  return (
    <Router history={hist}>
      <Switch>
        <Route exact path="/">
          <PersonagensScreen />
        </Route>
        <Route path="/:id">
          <DetailScreen />
        </Route>
      </Switch>
    </Router>
  );
}

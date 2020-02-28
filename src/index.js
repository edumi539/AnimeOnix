import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import MainLayout from "./Layout/MainLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailsPage from "./views/DetailsPage";
import AnimesDaTemporada from "./views/AnimesDaTemporadaScreen";
const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/seasonanimes/" component={AnimesDaTemporada} />
        <Route path="/anime/:animeId" component={DetailsPage} />
        <Redirect exact from="/" to="/seasonanimes/!#" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

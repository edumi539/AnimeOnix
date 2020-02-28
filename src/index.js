import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import HeaderBar from "./components/Header/header";
import PersonagensScreen from "./views/PersonagensScreen";
import MainLayout from "./Layout/MainLayout";
import "bootstrap/dist/css/bootstrap.min.css";
const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/main">
          <MainLayout />
        </Route>
        <Redirect from="/" to="/main/home/" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

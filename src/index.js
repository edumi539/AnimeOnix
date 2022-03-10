import "../src/Config/ReactotronConfig";
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { store } from "./store/index";
import MainLayout from "./Layout/MainLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./Routes";
const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <MainLayout />
    <Routes hist={hist} />
  </Provider>,
  document.getElementById("root")
);

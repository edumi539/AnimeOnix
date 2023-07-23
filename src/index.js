import "../src/config/ReactotronConfig";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import MainLayout from "./layout/MainLayout";
import Rotas from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <MainLayout />
    <Rotas />
  </Provider>,
  document.getElementById("root")
);

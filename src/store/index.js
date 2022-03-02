import { createStore, applyMiddleware } from "redux";
import Reactotron from "../Config/ReactotronConfig";
import thunk from "redux-thunk";
import CombineReducer from "../reducers/CombineReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  CombineReducer,
  composeWithDevTools(applyMiddleware(thunk), Reactotron.createEnhancer())
);

export { store };

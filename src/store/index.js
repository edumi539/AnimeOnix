import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CombineReducer from "../reducers/CombineReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  CombineReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export { store };

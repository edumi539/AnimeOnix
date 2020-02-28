import { combineReducers } from "redux";
import CharactersReducer from "./ReducerCharacters";
import ReducerJikan from "./ReducerJikan";

export default combineReducers({
  CharactersReducer,
  ReducerJikan
});

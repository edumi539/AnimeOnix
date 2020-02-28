import { combineReducers } from "redux";
import CharactersReducer from "./ReducerCharacters";
import ReducerJikan from "./ReducerJikan";
import JikanAnimesMoreID from "./ReducerJikanMoreID";
export default combineReducers({
  CharactersReducer,
  ReducerJikan,
  JikanAnimesMoreID
});

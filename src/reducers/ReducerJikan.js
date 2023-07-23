import {
  SET_APIJIKAN_ON_FETCHING,
  SET_APIJIKAN_ON_FAILED,
  SET_APIJIKAN_ON_SUCCESS
} from "../types/ActionTypes";

const INITIAL_STATE = {
  Animes: [],
  fetching: true
};

export default function AnimesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_APIJIKAN_ON_FETCHING:
      return {
        ...state,
        fetching: action.payload
      };
    case SET_APIJIKAN_ON_SUCCESS:
      return {
        ...state,
        Animes: action.payload
      };
    case SET_APIJIKAN_ON_FAILED:
      return {
        ...state,
        Animes: []
      };
    default:
      return state;
  }
}

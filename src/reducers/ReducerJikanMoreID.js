import {
  SET_APIJIKAN_MORE_ID_FETCHING,
  SET_APIJIKAN_MORE_ID_SUCCESS,
  SET_APIJIKAN_MORE_ID_FAILED
} from "../types/ActionTypes";

const INITIAL_STATE = {
  Anime_Data: [],
  fetching: true
};

export default function AnimeMoreId(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_APIJIKAN_MORE_ID_FETCHING:
      return {
        ...state,
        fetching: action.payload
      };
    case SET_APIJIKAN_MORE_ID_SUCCESS:
      return {
        ...state,
        Anime_Data: action.payload
      };
    case SET_APIJIKAN_MORE_ID_FAILED:
      return {
        ...state,
        Anime_Data: []
      };
    default:
      return state;
  }
}

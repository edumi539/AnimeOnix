import {
  SET_API_ON_FETCHING,
  SET_API_ON_SUCCESS,
  SET_API_ON_FAILED
} from "../types/ActionTypes";

const INITIAL_STATE = {
  chars: [],
  page: 1,
  loadingMore: true,
  fetching: true
};

export default function CharacterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_API_ON_FETCHING:
      return {
        ...state,
        fetching: action.payload
      };
    case SET_API_ON_SUCCESS:
      return {
        ...state,
        chars: action.payload
      };
    case SET_API_ON_FAILED:
      return {
        ...state,
        chars: []
      };
    default:
      return state;
  }
}

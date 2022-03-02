import { SET_TEXTSEARCHSUBMIT } from "../types/ActionTypes";

const INITIAL_STATE = {
  searchtextinput: "",
};

export default function ElementsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_TEXTSEARCHSUBMIT:
      return {
        ...state,
        searchtextinput: action.payload,
      };
    default:
      return state;
  }
}

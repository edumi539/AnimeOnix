import React from "react";
import {
  SET_APIJIKAN_ON_FETCHING,
  SET_APIJIKAN_ON_SUCCESS,
  SET_APIJIKAN_ON_FAILED,
  SET_TEXTSEARCHSUBMIT,
} from "../types/ActionTypes";
import JikanApi from "../requests/JikanAnimes";
export const ListAnimesOfSeasonAction = () => (dispatch) => {
  dispatch(ApiJikanFetching(true));
  const Promise = JikanApi();
  Promise.then((response) => {
    const { data } = response.data;
    dispatch(ApiJikanFetching(false));
    dispatch(ApiJikanSuccess(data));
  }).catch(dispatch(ApiJikanFailed()));
};

export const ApiJikanFetching = (response) => {
  return {
    type: SET_APIJIKAN_ON_FETCHING,
    payload: response,
  };
};
export const ApiJikanSuccess = (response) => {
  return {
    type: SET_APIJIKAN_ON_SUCCESS,
    payload: response,
  };
};
export const ApiJikanFailed = (response) => {
  return {
    type: SET_APIJIKAN_ON_FAILED,
  };
};
export const TextSearchSubmit = (response) => {
  return {
    type: SET_TEXTSEARCHSUBMIT,
    payload: response,
  };
};

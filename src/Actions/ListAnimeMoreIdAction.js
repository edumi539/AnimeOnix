import React from 'react'
import {
    SET_APIJIKAN_MORE_ID_FETCHING,
    SET_APIJIKAN_MORE_ID_SUCCESS,
    SET_APIJIKAN_MORE_ID_FAILED,
} from '../types/ActionTypes'
import JikanApiMoreId from '../requests/JikanAnimesMoreId'
const ListAnimeMoreIdAction = (id, request) => (dispatch) => {
    dispatch(ApiJikanMoreIdFetching())
    const Promise = JikanApiMoreId(id, request)
    Promise.then((response) => {
        console.log(response)
        const data = response.data.pictures
        dispatch(ApiJikanMoreIdFetching(false))
        dispatch(ApiJikanMoreIdSuccess(data))
    }).catch(dispatch(ApiJikanMoreIdFailed()))
    return <div></div>
}

export const ApiJikanMoreIdFetching = (response) => {
    return {
        type: SET_APIJIKAN_MORE_ID_FETCHING,
        payload: response,
    }
}
export const ApiJikanMoreIdSuccess = (response) => {
    return {
        type: SET_APIJIKAN_MORE_ID_SUCCESS,
        payload: response,
    }
}
export const ApiJikanMoreIdFailed = () => {
    return {
        type: SET_APIJIKAN_MORE_ID_FAILED,
    }
}

export default ListAnimeMoreIdAction

import * as ActionType from './types'
import api from '../../../../utils/apiUtil'

export const fetchListMovie = ()=>{
    return (dispatch) =>{
        dispatch(actListMoviesRequest)

        api
        .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP05")
        .then((result)=>{
            dispatch(actListMoviesSuccess(result.data.content))
        })
        .catch((err)=>{
            dispatch(actListMoviesFail(err))
        })
    }
}

const actListMoviesRequest = () => {
    return {
        type: ActionType.LIST_MOVIES_REQUEST,
    };
};

const actListMoviesSuccess = (data) => {
    return {
        type: ActionType.LIST_MOVIES_SUCCESS,
        payload: data,
    };
};

const actListMoviesFail = (error) => {
    return {
        type: ActionType.LIST_MOVIES_FAIL,
        payload: error,
    };
};
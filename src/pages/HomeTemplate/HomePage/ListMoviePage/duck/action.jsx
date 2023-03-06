import * as ActionType from './types'
import api from '../../../../../utils/apiUtil';

export const actFetchData = () => {
    return (dispatch) => {
        //request
        dispatch(actListMovieRequest());

        api
            .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP05")
            .then((result) => {
                //success
                dispatch(actListMovieSuccess(result.data.content));
            })
            .catch((error) => {
                //fail
                dispatch(actListMovieFail(error));
            });
    };
};

const actListMovieRequest = () => {
    return {
        type: ActionType.LIST_MOVIE_REQUEST,
    };
};

const actListMovieSuccess = (data) => {
    return {
        type: ActionType.LIST_MOVIE_SUCCESS,
        payload: data,
    };
};

const actListMovieFail = (error) => {
    return {
        type: ActionType.LIST_MOVIE_FAIL,
        payload: error,
    };
};

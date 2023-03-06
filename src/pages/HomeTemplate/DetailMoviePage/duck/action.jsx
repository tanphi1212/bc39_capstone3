import * as ActionType from "./types";
import api from "./../../../../utils/apiUtil";

export const fetchDetailMovie = (id) => {
  return (dispatch) => {
    dispatch(actDetailMlovieRequest());

    api
      .get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      .then((result) => {
        dispatch(actDetailMlovieSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actDetailMlovieFail(error));
      });
  };
};

const actDetailMlovieRequest = () => {
  return {
    type: ActionType.DETAIL_MOIVE_REQUEST,
  };
};

const actDetailMlovieSuccess = (data) => {
  return {
    type: ActionType.DETAIL_MOIVE_SUCCESS,
    payload: data,
  };
};

const actDetailMlovieFail = (error) => {
  return {
    type: ActionType.DETAIL_MOIVE_FAIL,
    payload: error,
  };
};

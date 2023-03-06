import * as ActionType from './types';
import api from './../../../../../utils/apiUtil'

export const fetchDSRapPhim = () => {
  return (dispatch) => {
    dispatch(actDSRapPhimRequest());
    api
    .get('QuanLyRap/LayThongTinHeThongRap')
    .then((result) => {
      dispatch(actDSRapPhimSuccess(result.data.content))
    })
    .catch((error) => {
      dispatch(actDSRapPhimFail(error))
    })
  }
}

const actDSRapPhimRequest = () => {
  return {
    type: ActionType.DS_RAP_PHIM_REQUEST,
  }
}

const actDSRapPhimSuccess = (data) => {
  return{
    type: ActionType.DS_RAP_PHIM_SUCCESS,
    payload: data,
  }
}

const actDSRapPhimFail = (error) => {
  return{
    type: ActionType.DS_RAP_PHIM_FAIL,
    payload: error,
  }
}
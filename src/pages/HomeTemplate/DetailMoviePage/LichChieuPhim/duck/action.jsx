import * as ActionType from './types';
import api from '../../../../../utils/apiUtil';

export const fetchLichChieu = (id) => {
    return (dispatch) =>{
        dispatch(actLichChieuRequest())

        api
        .get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
        .then((result)=>{
            dispatch(actLichChieuSuccess(result.data.content.heThongRapChieu))
        })
        .catch((error)=>{
            dispatch(actLichChieuFaill(error))
        })
    };
};



const actLichChieuRequest = ()=>{
    return {
        type: ActionType.LICH_CHIEU_REQUEST
    };
};

const actLichChieuSuccess = (data) => {
    return {
        type: ActionType.LICH_CHIEU_SUCCESS,
        payload: data
    };
};

const actLichChieuFaill = (error) => {
    return {
        type: ActionType.LICH_CHIEU_FAIL,
        payload: error
    };
};
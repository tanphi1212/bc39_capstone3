import * as ActionType from './types';
import api from '../../../../utils/apiUtil';

export const fetchTicketRoom = (id)=>{
    return (dispatch) => {
        dispatch(actTicketRoomRequest());
        api
        .get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
        .then((result)=>{
            dispatch(actTicketRoomSuccess(result.data.content))
        }).catch((error)=>{
            dispatch(actTicketRoomFail(error))
        })
    }
} 

const actTicketRoomRequest = () => {
    return{
        type: ActionType.TICKET_ROOM_REQUEST,
    }
};

const actTicketRoomSuccess = (data) => {
    return{
        type: ActionType.TICKET_ROOM_SUCCESS,
        payload: data,
    }
};

const actTicketRoomFail = (error) =>{
    return{
        type: ActionType.TICKET_ROOM_FAIL,
        payload: error,
    }
}
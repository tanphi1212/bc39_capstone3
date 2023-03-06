import * as ActionType from "./types"
import api from "../../../../utils/apiUtil";

export const actAddUserApi = (user) => {
    return (dispatch) => {
        dispatch(actAddUserRequset());
        api
            .post("/QuanLyNguoiDung/ThemNguoiDung", user)
            .then((result) => {
                dispatch(actAddUserSuccess(result.data.content))
            })
            .catch((err) => {
                dispatch(actAddUserFail(err))
            })
    }
}

const actAddUserRequset = () => {
    return {
        type: ActionType.ADD_USER_REQUEST
    }
}

const actAddUserSuccess = (data) => {
    return {
        type: ActionType.ADD_USER_SUCCESS,
        payload: data
    }
}

const actAddUserFail = (err) => {
    return{
        type: ActionType.ADD_USER_FAIL,
        payload: err
    }
}
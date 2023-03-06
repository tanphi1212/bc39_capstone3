import * as ActionType from "./types";
import api from "./../../../../utils/apiUtil";

export const actAuthLogin = (user, navigate) => {
  return (disptach) => {
    disptach(actAuthLoginRequest());
    api
      .post("/QuanLyNguoiDung/DangNhap", user)
      .then((result) => {
        if (result.data.content.maLoaiNguoiDung === "KhachHang") {
          return Promise.reject({
            response: {
              data: {
                content: "Bạn không có quyền truy cập!",
              },
            },
          });
        }

        disptach(actAuthLoginSuccess(result.data.content));

        //luu trang thai login
        localStorage.setItem("UserAdmin", JSON.stringify(result.data.content));

        //redirect to admin/dashboard
        navigate("/admin/dashboard", { replace: true });
      })
      .catch((error) => {
        disptach(actAuthLoginFail(error));
      });
  };
};

export const actAuthLoginRequest = () => {
  return {
    type: ActionType.AUTH_REQEST,
  };
};

export const actAuthLoginSuccess = (data) => {
  return {
    type: ActionType.AUTH_SUCCESS,
    payload: data,
  };
};

export const actAuthLoginFail = (error) => {
  return {
    type: ActionType.AUTH_FAIL,
    payload: error,
  };
};

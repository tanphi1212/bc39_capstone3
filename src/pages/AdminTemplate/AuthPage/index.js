import React, { useState } from "react";
import { actAuthLogin } from "./duck/actions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./../../../components/Loader";
import { useNavigate, Navigate } from "react-router-dom";

export default function AuthPage() {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.authLoginReducer);
  const navigate = useNavigate();
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actAuthLogin(state, navigate));
  };

  const renderNoti = () => {
    const { error } = props;
    return (
      error && (
        <div className="alert alert-danger">{error.response.data.content}</div>
      )
    );
  };

  if (props.loading) return <Loader />;
  if (localStorage.getItem("UserAdmin")){
    return <Navigate replace to="/admin/dashboard"/>
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h3>Login</h3>
          {renderNoti()}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Tài khoản</label>
              <input
                type="text"
                className="form-control"
                name="taiKhoan"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>
              <input
                type="text"
                className="form-control"
                name="matKhau"
                onChange={handleOnchange}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

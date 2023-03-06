import React, { useState } from 'react'
import { actAddUserApi } from './duck/actions';
import {useSelector, useDispatch} from 'react-redux'
import Loader from '../../../components/Loader';
export default function AddUserPage() {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.addUserReducer)

  console.log(props)


  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
    hoTen: ""
  }) 

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setState({
      ...state,
      [name]: value,
    })
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(actAddUserApi(state))
  }

  console.log(state)
  if (props.loading) return <Loader />;
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 mx-auto">
        <h3>Add User</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Tài khoản</label>
            <input
              type="text"
              className="form-control"
              name="taiKhoan"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type="text"
              className="form-control"
              name="matKhau"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <label>So DT</label>
            <input
              type="text"
              className="form-control"
              name="soDt"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <label>Ho Ten</label>
            <input
              type="text"
              className="form-control"
              name="hoTen"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Add User
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

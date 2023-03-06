import React, { Component } from "react";

export default class AddMoviePage extends Component {
  render() {
    return  <div className="container">
    <div className="row">
      <div className="col-md-6 mx-auto">
        <h3>Add User</h3>
        <form>
          <div className="form-group">
            <label>Tài khoản</label>
            <input
              type="text"
              className="form-control"
              name="taiKhoan"
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type="text"
              className="form-control"
              name="matKhau"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="taiKhoan"
            />
          </div>
          <div className="form-group">
            <label>So DT</label>
            <input
              type="text"
              className="form-control"
              name="taiKhoan"
            />
          </div>
          <div className="form-group">
            <label>Ho Ten</label>
            <input
              type="text"
              className="form-control"
              name="taiKhoan"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Add User
          </button>
        </form>
      </div>
    </div>
  </div> ;
  }
}

import React from 'react'

export default function DangKy() {
    return (
        <div className="container">
            <h3>Đăng Ký</h3>
            <div className="form-group">
                <p>Tài Khoản</p>
                <input className="form-control" name="taiKhoan"></input>

            </div>


            <div className="form-group">
                <p>Mật Khẩu</p>
                <input className="form-control" name="matKhau"></input>
            </div>
            <div className="form-group">
                <p>Họ tên</p>
                <input className="form-control" name="hoTen"></input>
            </div>

            <div className="form-group">
                <p>Email</p>
                <input className="form-control" name="email"></input>
            </div>

            <div className="form-group">
                <p>Số điện thoại</p>
                <input className="form-control" name="soDienThoai"></input>
            </div>

            <div className="form-group">
                <button className="btn btn-success" >Đăng Ký</button>
            </div>

        </div>
    )
}

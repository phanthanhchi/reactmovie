import React from 'react'

export default function DangKy() {
    return (
        <div className="container">
            <h3>Đăng ký</h3>
            <div className="form-group">
                <p>Tài khoản</p>
                <input className="form-control" name="taiKhoan" />
            </div>
            <div className="form-group">
                <p>Mật khẩu</p>
                <input className="form-control" name="matKhau" />
            </div>
            <div className="form-group">
                <p>Họ tên</p>
                <input className="form-control" name="hoTen" />
            </div>
            <div className="form-group">
                <p>Email</p>
                <input className="form-control" name="email" />
            </div>
            <div className="form-group">
                <p>Số điện thoại</p>
                <input className="form-control" name="soDienThoai" />
            </div>
            <div className="form-group">
                <button className="btn btn-success">Đăng ký</button>
            </div>
        </div>
    )
}

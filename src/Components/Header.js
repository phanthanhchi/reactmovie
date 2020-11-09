import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux";
export default function Header(props) {

    let userLogin = useSelector(
      (state) => state.QuanLyNguoiDungReducer.userLogin
    );
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          CYBERSOFT
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink
                className="nav-link"
                activeStyle={{ color: "white" }}
                activeClassName="bg-dark"
                to="/trangchu"
              >
                Trang chủ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="bg-dark text-white"
                to="/lienhe"
              >
                Liên hệ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="bg-dark text-white"
                className="nav-link"
                to="/gioithieu"
              >
                Giới thiệu
              </NavLink>
            </li>
            <li className="nav-item">
              {userLogin.taiKhoan ? (
                <NavLink to="/" className="font-weight-bold nav-link">
                  {userLogin.taiKhoan}
                </NavLink>
              ) : (
                <NavLink
                  activeClassName="bg-dark text-white"
                  className="nav-link"
                  to="/dangnhap"
                >
                  Đăng nhập
                </NavLink>
              )}
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">
                  Action 1
                </a>
                <a className="dropdown-item" href="#">
                  Action 2
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
}

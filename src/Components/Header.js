import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
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
              activeStyle={{ color: "green" }}
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
            <NavLink
              activeClassName="bg-dark text-white"
              className="nav-link"
              to="/dangnhap"
            >
              Đăng nhập
            </NavLink>
          </li>
          {/* ---------------------------todo list rfc--------------------- */}
         
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Bài Tập
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/todolistrfc">
              Todo List RFC
              </NavLink>
              <NavLink className="dropdown-item" to="/todolistrcc">
                Todo List RCC
              </NavLink>
              <NavLink className="dropdown-item" to="/todolistredux">
              Todo List Redux
              </NavLink>
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

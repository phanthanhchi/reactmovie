const { USER_LOGIN } = require("../../Util/Config");

let usLogin = {};
if (localStorage.getItem(USER_LOGIN)) {
  //Lấy userLogin trong storage gán cho state
  usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: usLogin,
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DANG_NHAP": {
      state.userLogin = action.userLogin;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

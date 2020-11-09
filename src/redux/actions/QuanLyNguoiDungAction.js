import Axios from "axios";
import swal from "sweetalert2";
import { ACCESSTOKEN, DOMAIN, USER_LOGIN } from "../../Util/Config";
import { history } from "../../Util/History";
export const dangNhapAction = (userLogin) => {
  return (dispatch) => {
    const promise = Axios({
      url: `${DOMAIN}/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: userLogin,
    });
    promise.then((result) => {
      console.log(result.data);
      //dang nhap thanh cong luu thông tin người dùng vào localstorage
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
      //luu token vào local store
      localStorage.setItem(ACCESSTOKEN, result.data.accessToken);

      swal.fire("Thông báo", "Đăng nhập thành công", "success");
      //dispatch giá trị lên reducer

      dispatch({
        type: "DANG_NHAP",
        userLogin: result.data,
      });
      history.push("/trangchu");
    });
    promise.catch((error) => {
      swal.fire("thông báo", error.response.data, "success");
    });
  };
};

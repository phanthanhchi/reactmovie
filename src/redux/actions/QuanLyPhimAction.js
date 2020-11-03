import { LAY_DANH_SACH_PHIM_ACTION } from "../const/QuanLyPhimConst";
import Axios from "axios";

//action gọi api (không dispatch dũ liệu trực tiếp lên reducer)
export const layDanhSachPhimApiAction = () => {
  return (dispatch) => {
    //action này trả về hàm có tham số dispatch
    var promise = Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    });
    //thành cong lấy dữ liện trả về
    promise.then((res) => {
      dispatch(layDanhSachPhimApi(res.data));

      //setDSPhim(res.data)
    });
    //thất bại console.log(lỗi)
    promise.catch((error) => {
      console.log(error.response.data);
    });
  };
};

//action dispatch reducer
export const layDanhSachPhimApi = (dataPhim) => {
  return {
    type: LAY_DANH_SACH_PHIM_ACTION,
    dsPhim: dataPhim,
  };
};

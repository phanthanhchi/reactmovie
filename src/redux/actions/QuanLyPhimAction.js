import { LAY_DANH_SACH_PHIM_ACTION } from "../const/QuanLyPhimConst";
import Axios from "axios";
import ChiTietPhim from "../../Pages/ChiTietPhim";

// export const layDanhSachPhimApi = (dataPhim) => {
//   return {
//     type: LAY_DANH_SACH_PHIM_ACTION,
//     dsPhim: dataPhim,
//   };
// };

//action gọi api (không dispatch dũ liệu trực tiếp lên reducer)
export const layDanhSachPhimApiAction = () => {
  return (dispatch) => {
    //action này trả về hàm có tham số dispatch
    let promise = Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    });
    promise.then((res) => {
      console.log("danh sách phim", res.data);
      dispatch({
        type: LAY_DANH_SACH_PHIM_ACTION,
        dsPhim: res.data,
      });

      //setDSPhim(res.data)
    });
    //thất bại console.log(lỗi)
    promise.catch((error) => {
      console.log(error.response.data);
    });
  };
};

//action dispatch reducer

export const layChiTietPhimApiAction = async (maPhim) => {
  
    return async (dispatch) => {
     try { 
      //gọi api lấy dữ liệu chi tiết về phim
      let result = await Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: "GET",
      });
      console.log("chi tiết phim", result.data);
      dispatch({
        type: 'LAY_CHI_TIET_PHIM',
        chiTietPhim:result.data
      })

 } catch (err) {
    console.log(err)
  }


    };
 
};
export const layThongTinPhongVeApiAction = async (maLichChieu) => {
  return async (dispatch) => {
    try {
      const { data, status } = await Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method:'GET'
      })
      console.log('datathong tin phòng vé', data)
      if (status === 200)
      {
        dispatch({
          type: 'THONG_TIN_PHONG_VE',
          thongTinPhongVe:data
        })}
    } catch (err) {
      console.log(err)
    }
  }
}
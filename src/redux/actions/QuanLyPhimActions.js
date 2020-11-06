import Axios from "axios"
import { LAY_DANH_SACH_PHIM_ACTION } from "../const/QuanLyPhimConst"


//-----action gọi api (không dispatch dữ liệu trực tiếp lên reducer)-------------
export const layDanhSachPhimApiAction = () => {
    return dispatch => {
        //action này trả về hàm có tham số dispatch 
        var promise = Axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?manhom=GP01',
            method: 'GET'
        });
        //Thành công lấy dữ liệu trả về set lại state dsPhim
        promise.then((res) => {
            dispatch(layDanhSachPhimApi(res.data))
        })
        //Thất bại console.log(lỗi)
        promise.catch((error) => {
            console.log(error.response.data);
        })
    }
}

// export const getDataHome = () => {
//     return dispatch => {
//         //axios thêm phim ...

//         //promise.then....

//         dispatch(carousel());
//         dispatch(getFilms());
//         //...
//     }
// }



//----------action dispatch reducer--------------
export const layDanhSachPhimApi = (dataPhim) => {
    return {
        type: LAY_DANH_SACH_PHIM_ACTION,
        dsPhim: dataPhim
    }
}
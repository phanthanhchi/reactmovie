import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { layDanhSachPhimApi, layDanhSachPhimApiAction } from '../redux/actions/QuanLyPhimActions';

export default function TrangChu(props) {
    //Lấy danh sách phim từ redux về
    const dsPhim = useSelector(state => state.QuanLyPhimReducer.dsPhim);
    const dispatch = useDispatch();
    // const [dsPhim,setDSPhim] = useState([]);

    useEffect(() => {
        // var promise = Axios({
        //     url: 'https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?manhom=GP01',
        //     method: 'GET'
        // });
        // //Thành công lấy dữ liệu trả về set lại state dsPhim
        // promise.then((res) => {
        //     dispatch(layDanhSachPhimApi(res.data))

        //     //   setDSPhim(res.data);
        // })
        // //Thất bại console.log(lỗi)
        // promise.catch((error) => {
        //     console.log(error.response.data);
        // })
        dispatch(layDanhSachPhimApiAction());
    }, [])

    const renderPhim = () => {
        return dsPhim.map((phim, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-left">
                    <img className="card-img-top" src={phim.hinhAnh} alt={phim.hinhAnh} onError={(e) => { e.target.onError = null; e.target.src = "https://picsum.photos/300/300" }} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                    </div>
                </div>
            </div>
        })
    }
    return (
        <div className="container">
            <h3 className="text-center display-4">Danh sách phim</h3>
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}

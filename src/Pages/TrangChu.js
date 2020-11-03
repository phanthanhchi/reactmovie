// import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    layDanhSachPhimApi,
    layDanhSachPhimApiAction,
} from "../redux/actions/QuanLyPhimAction";
// import "../redux/actions/QuanLyPhimAction";
export default function TrangChu() {
    //lấy danh sách phim từ redux
    const dsPhim = useSelector((state) => state.QuanLyPhimReducer.dsPhim);

    const dispatch = useDispatch();
    // const [dsPhim, setDSPhim] = useState([])

    useEffect(() => {
        // var promise = Axios({
        //   url:
        //     "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        //   method: "GET",
        // });
        // //thành cong lấy dữ liện trả về
        // promise.then((res) => {
        //   dispatch(layDanhSachPhimApi(res.data));

        //   //setDSPhim(res.data)
        // });
        // //thất bại console.log(lỗi)
        // promise.catch((error) => {
        //   console.log(error.response.data);
        // });
        dispatch(layDanhSachPhimApiAction());
    }, []);

    const renderPhim = () => {
        return dsPhim.map((phim, index) => {
            return (
                <div className="col-4" key={index}>
                    <div className="card text-left">
                        <img
                            className="card-img-top"
                            src={phim.hinhAnh}
                            alt={phim.hinhAnh}
                            onError={(e) => {
                                e.target.onError = null;
                                e.target.src = "https://picsum.photos/300/300";
                            }}
                        />
                        <div className="card-body">
                            <h4 className="card-title">{phim.tenPhim}</h4>
                        </div>
                    </div>
                </div>
            );
        });
    };
    return (
        <div className="container">
            <h3>DANH SÁCH PHIM</h3>

            <div className="row">
                {renderPhim()}
            </div>
        </div>
    );
}

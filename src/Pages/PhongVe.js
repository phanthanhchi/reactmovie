import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinPhongVeApiAction } from "../redux/actions/QuanLyPhimAction";

export default function PhongVe(props) {
  const thongTinPhongVe = useSelector(
    (state) => state.QuanLyPhimReducer.thongTinPhongVe
  );

  const dispatch = useDispatch();

  useEffect(async () => {
    //lấy tham số lịch chiếu từ url
    let maLichChieu = props.match.params.maLichChieu;
    //goi action ket noi api lay du lieu lich chieu về
    dispatch(await layThongTinPhongVeApiAction(maLichChieu));
  }, []);
  return (
    <div className="container">
    <div className="row">
        <div className="col-8">
            {/*Thông tin phòng vé */}
        </div>
        <div className="col-4">
            {/*hiển thị thông tin phim */}
        </div>
    </div>
</div>
  )
}
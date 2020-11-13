import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layChiTietPhimApiAction } from "../redux/actions/QuanLyPhimAction";
import moment from "moment";
import { NavLink } from "react-router-dom";
export default function ChiTietPhim(props) {
  const chiTietPhim = useSelector(
    (state) => state.QuanLyPhimReducer.chiTietPhim
  );

  const dispatch = useDispatch();

  useEffect(async () => {
    let maPhim = props.match.params.maphim;
    console.log("ma phim", maPhim);
    dispatch(await layChiTietPhimApiAction(maPhim));
  }, []);
  console.log("chitietphim", chiTietPhim);
  //console.log("ma phim", maPhim);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            className="mt-5"
            style={{ width: 300, height: 150 }}
            src={chiTietPhim.hinhAnh}
          />
        </div>

        <div className="col-6">
          <table className="table">
            <thead>
              <tr>
                <th>Tên Phim</th>
                <th>{chiTietPhim.tenPhim}</th>
              </tr>
              <tr>
                <th>Mô tả</th>
                <th>{chiTietPhim.moTa}</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <div className="row mt-5 ">
        <div className="col-12">
          <span className="display-4">THÔNG TIN LỊCH CHIẾU</span>
          <div className="row">
            <div
              className="nav flex-column nav-pills col-4"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
                let active = index === 0 ? "active" : "";
                return (
                  <a
                    key={index}
                    className={"nav-link "+ active}
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href={`#${heThongRap.maHeThongRap}`}
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    <img
                      src={heThongRap.logo}
                      alt={heThongRap.logo}
                      style={{ width: 50, height: 50 }}
                    />
                    {heThongRap.tenHeThongRap}
                  </a>
                );
              })}
              {/* <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                    <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                    <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a> */}
            </div>
            <div className="tab-content col-8" id="v-pills-tabContent">
              {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
                let active = index === 0 ? "active" : "";
                return (
                  <div
                    key={index}
                    className={"tab-pane fade show " + active}
                    id={heThongRap.maHeThongRap}
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    {heThongRap.cumRapChieu?.map((cumRap, index) => {
                      return (
                        <div key={index}>
                          <p style={{ fontWeight: "bold", fontSize: "25px" }}>
                            {cumRap.tenCumRap}
                          </p>
                          <div className="row">
                            {cumRap.lichChieuPhim
                              ?.slice(0, 12)
                              .map((lichChieu, index) => {
                                return (
                                  <NavLink
                                    to={
                                      "/chitietphongve/" + lichChieu.maLichChieu
                                    }
                                    key={index}
                                    className="col-2"
                                  >
                                    {moment(lichChieu.ngayChieuGioChieu).format(
                                      "hh:mm A"
                                    )}
                                  </NavLink>
                                );
                              })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import logo from './logo.svg';
import './App.css';
import TrangChu from './Pages/TrangChu';
import LienHe from './Pages/LienHe';
import { Route, Switch } from 'react-router-dom';
import GioiThieu from './Pages/GioiThieu';
import Header from './Components/Header';
import DangNhap from './Pages/DangNhap';
import Home from './Pages/Home';
import DangKy from './Pages/DangKy';
import DemoHOC from './HOC/DemoHOC';
import { HomeTemplate } from './Templates/HomeTemplate';
import { UserTemplate } from './Templates/UserTemplate';
import { AdminTemplate } from './Templates/AdminTemplate';
import QuanLyPhim from './Pages/AdminPages/QuanLyPhim';
import QuanLyNguoiDung from './Pages/AdminPages/QuanLyNguoiDung';
import ChiTietPhim from './Pages/ChiTietPhim';
import PhongVe from './Pages/PhongVe';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Switch>


        {/* <AdminTemplate exact path='/gioithieu' Component={GioiThieu} /> */}
        <AdminTemplate exact path='/admin/quanlyphim' Component={QuanLyPhim} />
        <AdminTemplate exact path='/admin/quanlynguoidung' Component={QuanLyNguoiDung} />

        <UserTemplate exact path='/dangnhap' Component={DangNhap} />
        <UserTemplate exact path='/dangky' Component={DangKy} />

        <HomeTemplate exact path='/trangchu' Component={TrangChu} />
        <HomeTemplate exact path='/chitietphim/:maphim' Component={ChiTietPhim} />
        <HomeTemplate exact path='/chitietphongve/:maLichChieu' Component={PhongVe} />

        <Route exact path='/lienhe' component={LienHe} />
        <Route exact path='/demohoc' component={DemoHOC} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/' component={TrangChu} />

      </Switch>
      {/* 
        <Route path='/lienhe'>
          <LienHe />
        </Route> */}
    </>
  );
}

export default App;

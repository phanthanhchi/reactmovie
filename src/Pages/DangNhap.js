import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { dangNhapAction } from '../redux/actions/QuanLyNguoiDungAction';
export default function DangNhap(props) {

    const dispatch = useDispatch()
    
    const [userLogin,setUserLogin] = useState({taiKhoan:'',matKhau:''})
    // console.log('props trang login', props);
    console.log(userLogin);
    const handleChange = (e) => {
        let {value,name} = e.target;
        //Thay đổi giá trị thuộc tính đang onChange
        let newUserLogin = {...userLogin,[name]:value};
        //set lại state của userLogin = giá trị mới
        setUserLogin(newUserLogin);
    } 
    const handleSubmit = (e) => {
        e.preventDefault(); //Chặn sự kiện reload browser
        dispatch(dangNhapAction(userLogin))
        // if(userLogin.taiKhoan === 'cybersoft' && userLogin.matKhau==='cybersoft'){
        //     //Chuyển về home
        //     alert('Đăng nhập thành công !');
        //     props.history.push('/trangchu');
        // }
    }
    return (
        <form className="container" onSubmit={handleSubmit}>
            <h3 className="display-4">ĐĂNG NHẬP</h3>
            <div className="form-group">
                <p>Tài khoản</p>
                <input className="form-control" name="taiKhoan" onChange={handleChange} />
            </div>
            <div className="form-group">
                <p>Mật khẩu</p>
                <input className="form-control" name="matKhau" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <button type="submit">Đăng nhập</button>
            </div>
        </form>
        
    )
}

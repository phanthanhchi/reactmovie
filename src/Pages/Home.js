import React, { Component } from 'react'
import axios from 'axios';//Đây là thư viện kết nối backend
export default class Home extends Component {


    state = {
        dsPhim: []
    }


    renderPhim = () => {
        return this.state.dsPhim.map((phim, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-left">
                    <img className="card-img-top" src={phim.hinhAnh} alt={phim.hinhAnh} onError={(e)=>{ e.target.onError = null; e.target.src="https://picsum.photos/300/300"}} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                    </div>
                </div>
            </div>
        })
    }

    getFilms = () => {
        let promise = axios({
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method:'GET'
        })
        //Xử lý thành công
        promise.then(res => {
            console.log(res.data);
            this.setState({
                dsPhim:res.data
            })
        });
        //Xử lý thất bại 
        promise.catch(err => {
            console.log(err.response.data);
        })

    }

    render() {
        return (
            <div className="container">
                <h3>Danh sách phim <button onClick={()=>{
                    this.getFilms();
                }}>render phim</button></h3>
                <div className="row">
                    {this.renderPhim()}
                </div>
            </div>
        )
    }

    componentDidMount() {
        //Hàm chạy sau khi html được render
        this.getFilms();
    }
}

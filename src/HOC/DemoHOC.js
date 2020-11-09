import React, { useState } from "react";
import DangKy from "../Pages/DangKy";
import DangNhap from "../Pages/DangNhap";
import LienHe from "../Pages/LienHe";
import Modal from "./Modal";

const DangKyWithModal = new Modal('Đăng Ký', DangKy)
const DangNhapWithModal = new Modal('Đăng Nhập', DangNhap)

export default function DemoHOC() {
    const [state, setState] = useState('DK')
    

  const renderModal = () => {
      if (state === 'DK') {
        return DangKyWithModal
      } else {
          return DangNhapWithModal
      }
  };
  return (
    <div>
      
      <div>
        <button
          data-toggle="modal"
          data-target="#modelId"
          onClick={() => {
            setState('DK');
            
          }}
        >
          mở form đăng ký
        </button>
        <button
          data-toggle="modal"
          data-target="#modelId"
          onClick={() => {
            setState('DN');
            
          }}
        >
          mở form đăng nhập
        </button>
      </div>

      {renderModal()}
    </div>
  );
}

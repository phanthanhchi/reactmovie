import {combineReducers} from 'redux';

import {QuanLyPhimReducer} from './QuanLyPhimReducer'
import {QuanLyNguoiDungReducer} from './QuanLyNguoiDungReducer'

export const rootReducer = combineReducers({
    //Khai báo các reducer
    QuanLyPhimReducer,
    QuanLyNguoiDungReducer
    
});

import { applyMiddleware, combineReducers, createStore } from 'redux';

import { QuanLyPhimReducer } from './QuanLyPhimReducer';
import ToDoListReducers from './ToDoListReducers'
import reduxThunk from 'redux-thunk'

export const rootReducer = combineReducers({
    //Khai báo các reducer
    QuanLyPhimReducer,
    ToDoListReducers

 });
//const store = createStore(rootReducer, applyMiddleware(reduxThunk))

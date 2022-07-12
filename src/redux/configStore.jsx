import {combineReducers,applyMiddleware,createStore} from 'redux';
import thunk from "redux-thunk";
import { QuanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer';
import { QuanLyTaiLieuReducer } from './reducers/QuanLyTaiLieuReducer';

const rootReducer = combineReducers({
    QuanLyNguoiDungReducer: QuanLyNguoiDungReducer,
    QuanLyTaiLieuReducer: QuanLyTaiLieuReducer
});

export const store= createStore(rootReducer,applyMiddleware(thunk));
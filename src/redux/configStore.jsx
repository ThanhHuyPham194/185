import {combineReducers,applyMiddleware,createStore} from 'redux';
import thunk from "redux-thunk";
import { QuanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer';
import { QuanLyTaiLieuReducer } from './reducers/QuanLyTaiLieuReducer';
import popupReducer from './reducers/popupReducer';

const rootReducer = combineReducers({
    QuanLyNguoiDungReducer: QuanLyNguoiDungReducer,
    QuanLyTaiLieuReducer: QuanLyTaiLieuReducer,
    popup: popupReducer,
});

export const store= createStore(rootReducer,applyMiddleware(thunk));
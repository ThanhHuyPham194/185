import {
  CAP_NHAT_NGUOI_DUNG,
  THEM_NGUOI_DUNG,
  XOA_NGUOI_DUNG,
  LAY_NGUOI_DUNG,
} from "../types/QuanLyNguoiDungType";
import { XOA_DI_TICH } from "../types/QuanLyTaiLieuType";

const documentsData = [
  {
    id:"1",
    name: "Di tích kiến trúc Cấp quốc gia đặc biệt",
    address: "Ấp 2 thuộc xã Tân Kiên – Bình Chánh",
    type: "Cấp quốc gia đặc biệt",
    image:"https://tienamphu.com/wp-content/uploads/2018/07/chua-tu-quang.binhchanh.jpg",
  },
  {
    id:"2",
    name: "Di tích lịch sử Cấp quốc gia đặc biệt",
    address: "Ấp 2 thuộc xã Tân Kiên – Bình Chánh",
    type: "Cấp quốc gia đặc biệt",
    image:"https://www.kienthucviet.vn/wp-content/uploads/2019/07/thuyet-minh-ve-dia-dao-cu-chi-1.jpg",
  },
  {
    id:"3",
    name: "Di tích Lò Cấp quốc gia đặc biệt",
    address: "Ấp 2 thuộc xã Tân Kiên – Bình Chánh",
    type: "Cấp quốc gia đặc biệt",
    image:"https://gocxua.net/wp-content/uploads/2021/10/bia-lo-gom-hung-loi.jpg",
  },
  {
    id:"4",
    name: "Di tích Cấp quốc gia",
    address: "Ấp 2 thuộc xã Tân Kiên – Bình Chánh",
    type: "Cấp quốc gia",
    image:"https://vnn-imgs-a1.vgcloud.vn/img2.infonet.vn/w800/Uploaded/2020/yrfjpynfzyr/2019_06_12/11_1.jpg",
  },
  {
    id:"5",
    name: "Di tích Cấp thành phố",
    address: "Ấp 2 thuộc xã Tân Kiên – Bình Chánh",
    type: "Cấp thành phố",
    image:"https://gocxua.net/wp-content/uploads/2021/10/bia-lo-gom-hung-loi.jpg",
  },
  {
    id:"6",
    name: "Di tích Cấp thành phố",
    address: "Ấp 2 thuộc xã Tân Kiên – Bình Chánh",
    type: "Cấp thành phố",
    image:"https://vnn-imgs-a1.vgcloud.vn/img2.infonet.vn/w800/Uploaded/2020/yrfjpynfzyr/2019_06_12/11_1.jpg",
  },
  {
    id:"7",
    name: "Di tích Cấp quốc gia",
    address: "Ấp 2 thuộc xã Tân Kiên – Bình Chánh",
    type: "Cấp quốc gia",
    image:"https://vnn-imgs-a1.vgcloud.vn/img2.infonet.vn/w800/Uploaded/2020/yrfjpynfzyr/2019_06_12/11_1.jpg",
  },
  {
    id:"8",
    name: "Di tích Cấp thành phố",
    address: "Ấp 2 thuộc xã Tân Kiên – Bình Chánh",
    type: "Cấp thành phố",
    image:"https://gocxua.net/wp-content/uploads/2021/10/bia-lo-gom-hung-loi.jpg",
  },
  {
    id:"9",
    name: "Di tích Cấp thành phố",
    address: "Ấp 2 thuộc xã Tân Kiên – Bình Chánh",
    type: "Cấp thành phố",
    image:"https://vnn-imgs-a1.vgcloud.vn/img2.infonet.vn/w800/Uploaded/2020/yrfjpynfzyr/2019_06_12/11_1.jpg",
  },
  
];

const stateDefault = {
  documents: documentsData,
};

export const QuanLyTaiLieuReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case XOA_DI_TICH:
      return {
        ...stateDefault,
        documents: state.documents.filter((document) => document.id !== action.payload),
      };
    default:
      return state;
  }
};

import { XOA_DI_TICH } from "../types/QuanLyTaiLieuType"

export const XoaDiTichAction=(id)=>({
    type: XOA_DI_TICH,
    payload: id,
})
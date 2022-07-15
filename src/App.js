import './App.scss';
import React from 'react';
import {createBrowserHistory} from "history";
import {Routes, Route, BrowserRouter, useNavigate} from 'react-router-dom';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Login from './pages/Admin/Account/Begin/Login/Login';
import AdminHome from './pages/Admin/Account/Begin/AdminHome/AdminHome';
import Register from './pages/Admin/Account/Begin/Register/Register';
import UserHome from './pages/User/UserHome/UserHome';
import Edit from './pages/Admin/Account/Begin/Edit/Edit';
import Information from './pages/Admin/Account/Begin/Information/Information';
import Document from './pages/Admin/TBDT/HoSo/Document/Document';
import Calendar from './pages/Admin/Account/Calendar/Calendar';
import DocumentBOD from './pages/Admin/TBDT/VanThu/DocumentBOD/DocumentBOD';
import DocumentType from './pages/Admin/TBDT/VanThu/DocumentType/DocumentType';
import DocumentDetail from './pages/Admin/TBDT/VanThu/DocumentDetail/DocumentDetail';
import OverView from './pages/Admin/TBDT/HoSo/OverView/OverView';
import DrawingOverView from './pages/Admin/TBDT/HoSo/DrawingOverView/DrawingOverView';
import DrawingBuilding from './pages/Admin/TBDT/HoSo/DrawingBuilding/DrawingBuilding';
import Payroll from './pages/Admin/HCTH/ThuChi/Payroll/Payroll';
import Director from './pages/Admin/Director/Director';
import VanThu from './pages/Admin/TBDT/VanThu/VanThu/VanThu';
import DanhMuc from './pages/Admin/TBDT/VanThu/DanhMuc/DanhMuc';
import AddMission from './pages/Admin/Mission/AddMission';
import ListMission from './pages/Admin/Mission/ListMission';
import Documentary from './pages/Admin/Documentary/Documentary';
import ManageTask from './pages/Admin/ManageTask/ManageTask';
import DocumentHSDT from './pages/Admin/TBDT/VanThu/DocumentHSDT/DocumentHSDT';


function App() {


  return (
    <BrowserRouter>
          <Routes >
            <Route path='admin' element={<AdminTemplate/>}>
                <Route path='adminhome' element={<AdminHome/>}></Route>
                <Route path='register' element={<Register/>}></Route>
                <Route path='edit' element={<Edit/>}></Route>
                <Route path='information' element={<Information/>}></Route>
                <Route path='document' element={<Document/>}></Route>
                <Route path='calendar' element={<Calendar/>}></Route>
                <Route path='director' element={<Director/>}></Route>
                <Route path='documentbod' element={<DocumentBOD/>}></Route>
                <Route path='documenttype' element={<DocumentType/>}></Route>
                <Route path='documentdetail' element={<DocumentDetail/>}></Route>
                <Route path='overview' element={<OverView/>}></Route>
                <Route path='drawingoverview' element={<DrawingOverView/>}></Route>
                <Route path='drawingbuilding' element={<DrawingBuilding/>}></Route>
                <Route path='payroll' element={<Payroll/>}></Route>
                <Route path='director' element={<Director/>}></Route>
                <Route path='vanthu' element={<VanThu/>}></Route>
                <Route path='danhmuc' element={<DanhMuc/>}></Route>
                <Route path='addmission' element={<AddMission/>}></Route>
                <Route path='listmission' element={<ListMission/>}></Route>
                <Route path='documentary' element={<Documentary/>}></Route>
                <Route path='managetask' element={<ManageTask/>}></Route>
                <Route path='hsdt-document' element={<DocumentHSDT/>}></Route>




            </Route>

            <Route path='user' element={<AdminTemplate/>}>
                <Route path='userhome' element={<UserHome/>}></Route>
            </Route>



            <Route path='/' element={<Login/>}></Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
 
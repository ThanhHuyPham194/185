import './App.scss';
import React from 'react';
import {createBrowserHistory} from "history";
import {Routes, Route, BrowserRouter, useNavigate} from 'react-router-dom';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Login from './pages/Login/Login';
import AdminHome from './pages/Admin/AdminHome/AdminHome';
import Register from './pages/Admin/Register/Register';
import UserHome from './pages/User/UserHome/UserHome';
import Edit from './pages/Admin/Edit/Edit';
import Information from './pages/Admin/Information/Information';
import Document from './pages/Admin/Document/Document';
import Calendar from './pages/Admin/Calendar/Calendar';


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
 
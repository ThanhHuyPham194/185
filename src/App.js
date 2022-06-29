import './App.scss';
import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Login from './pages/Login/Login';
import AdminHome from './pages/Admin/AdminHome/AdminHome';
import Register from './pages/Admin/Register/Register';
function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path='admin' element={<AdminTemplate/>}>
                <Route path='adminhome' element={<AdminHome/>}></Route>
                <Route path='register' element={<Register/>}></Route>

            </Route>




            <Route path='/' element={<Login/>}></Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
 
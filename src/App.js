import './App.scss';
import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Login from './pages/Login/Login';
function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path='admin' element={<AdminTemplate/>}>

            </Route>




            <Route path='/' element={<Login/>}></Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;

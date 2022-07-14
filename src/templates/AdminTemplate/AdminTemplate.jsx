
// SYSTEM
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
import Modal from '../../components/Modal/Modal';
// COMPONENT
import Header from './layouts/Header/Header'
import Navbar from './layouts/Navbar/Navbar'
export default function AdminTemplate() {
  const { isPopup, isPopupReport } = useSelector(store => store.popup);
  const dispatch = useDispatch();
  const handleClosePopup = () => {
    if (isPopup || isPopupReport) {
      dispatch({
        type: 'CLOSED_POPUP'
      });
      dispatch({
        type: 'CLOSED_POPUP_REPORT'
      });
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {isPopup || isPopupReport ?
        <Modal>
          <div className="modal-fade-out" onClick={handleClosePopup}></div>
        </Modal>
        : ''}
      <div className={`container admin-tainer`}>
        <Navbar />
        <Header />
        <div className='outlet'>
          <Outlet />

        </div>

      </div>
    </>
  );
}

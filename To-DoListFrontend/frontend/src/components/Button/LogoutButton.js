import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/Actions/AuthAction';

const LogoutButton = ({logoutHandler}) => {

 
  
  return (
    <div className="d-flex flex-row justify-content-end">
         <button className="btn btn-outline-primary  " onClick={logoutHandler}> Logout</button>
       </div>
  )
}

export default LogoutButton
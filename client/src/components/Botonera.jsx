import React from 'react';
import Asectomy from "../assests/Asectomy2.png"
import { Link } from "react-router-dom";
import { useUser } from '../contexts/userContext';
const Botonera = () => {
    const { user, setUser } = useUser();
    return (
        <div className="navbar-nav flex-row justify-content-around text-white">
        <img src={Asectomy} width="400" height="150"></img>
        <ul className="navbar-nav flex-row align-items-center m-2">
          <li className="nav-item m-2 text-white">
            <Link to="/" className='btn btn-outline-light'>Home</Link>
          </li>
          <li className="nav-item m-2">
            {!user?<Link to="/login" className='btn btn-outline-light'>Login</Link>:''}
          </li>
          <li className="nav-item m-2">
            {!user?<Link to="/registro" className='btn btn-outline-light'>Registro</Link>:''}
          </li>


        </ul>
      </div>
    );
}

export default Botonera;

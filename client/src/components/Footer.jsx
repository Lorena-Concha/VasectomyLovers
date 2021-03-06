import React from 'react';
import { useUser } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";
import logout from '../actions/logout';

const Footer = () => {
    const { user, setUser } = useUser();
    const navigate = useNavigate();
    const renderInfo = () => {
        if (user) {
            return (

                <div className='float-sm-left mt-3'>
                    <p className='p'>Usuario Activo {user.email}</p>
                    <button onClick={logOut} className='btn btn-outline-light'>Log Out</button>
                </div>
            )
        } else {
            return (
                <div className='d-flex '>
                   
                </div>
            )
        }
    }

    const logOut = async () => {
        const { success } = await logout();
        if (success) setUser(null);
        else window.alert("Error, could not log out");
        navigate("/");
    };

    return (
        <div>
            <div>
                <p>{renderInfo()} </p>
                
            </div>
        </div>
    );
}

export default Footer;

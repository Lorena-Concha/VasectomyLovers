import React, { useEffect, useState } from 'react';
import axios from 'axios';




const Contacta = () => {
    const [users, setUsers] = useState();
    const getUsers = () => {
        axios.defaults.withCredentials = true;
        axios('http://localhost:8000/api/users', {
            method: 'GET',
            withCredentials: true
        }).then(res => {
            setUsers(res.data);
            console.log(res.data)
        })
            .catch(err => console.log("Error:", err))
    }
    useEffect(() => {
        getUsers();
    }, []);
    return (
        <div className='d-flex justify-content-center'>
            <div className='w-50'>
                <table class="table table-dark">
                    <tbody>
                        {users?.map((user, i) =>
                            <tr key={i}>
                                <td>{user.firstName} {user.lastName} </td><td>{user.email}</td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Contacta;

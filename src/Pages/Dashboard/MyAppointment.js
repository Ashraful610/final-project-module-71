import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointment , setAppointment] = useState([])
    const [user] = useAuthState(auth);

    const navigate = useNavigate()

    useEffect( () => {
            if(user) {
                fetch(`https://shielded-scrubland-90862.herokuapp.com/booking?patient=${user.email}`,{
                    method: 'GET',
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                .then(res => {
                      if(res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem('accessToken')
                        navigate('/')
                      }
                   return res.json()
                })
                .then(data => 
                    setAppointment(data))
            }
    },[user])
    return (
    <div className="overflow-x-auto">
        <table className="table w-full">
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Threatment</th>
            </tr>
            </thead>
            <tbody>
                { 
                    appointment?.map((a , index) => 
                     <tr>
                        <th>{index + 1}</th>
                        <th>{a.patientName}</th>
                        <td>{a.date}</td>
                        <td>{a.slot}</td>
                        <td>{a.threatment}</td>
                    </tr>)
                }
           
            </tbody>
        </table>
     </div>
    );
};

export default MyAppointment;
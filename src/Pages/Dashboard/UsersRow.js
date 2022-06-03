import React from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({user ,refetch}) => {
    const {email ,role} = user;
    
    const makeAdmin = () => {
        fetch(`https://shielded-scrubland-90862.herokuapp.com/user/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('failed to make an admin')
            }
            return res.json()
        })
        .then(data => {
            if(data.modifiedCount >0 ){
                refetch()
                toast.success('Successfully  user make a admin')
            }
           
        })
    }
    return (
            <tr>
              <th>1</th>
              <td>{email}</td>
              <td>
                { role !== 'admin'&& <button onClick={makeAdmin} class="btn btn-xs">Make admin</button>}
              </td>
              <td>
              <button class="btn btn-xs">Remove user</button>
              </td>
            </tr>
    );
};

export default UsersRow;
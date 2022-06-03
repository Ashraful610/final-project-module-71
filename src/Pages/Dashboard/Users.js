import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading'
import UsersRow from './UsersRow';

const Users = () => {

    const {data:users , isLoading ,refetch} = useQuery('users',()=> fetch('https://shielded-scrubland-90862.herokuapp.com/user',{
        method: 'GET',
        headers:{
            authorization:  `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if(isLoading){
        return <Loading ></Loading>
    }
    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
               {
                   users?.map(user => <UsersRow key={user._id} user={user} refetch={refetch}></UsersRow>)
               }  
          </tbody>
        </table>
      </div>
    );
};

export default Users;
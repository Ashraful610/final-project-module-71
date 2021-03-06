import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
         <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                <h2 className='text-3xl text-purple-600 my-4 text-center'>Welcome to your Dashboard</h2>
                    <Outlet></Outlet>           
                </div> 
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
                    <ul className="menu p-4 overflow-y-auto w-60 bg-base-300 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">MyAppointment</Link></li>
                    <li><Link to="/dashboard/review">MyReview</Link></li>
                    <li><Link to="/dashboard/history">MyHistory</Link></li>
                      {
                        admin &&
                          <li> <Link to="/dashboard/users">All Users</Link></li>
                      }
                     </ul>
                
                </div>
            </div>
    );
};

export default Dashboard;
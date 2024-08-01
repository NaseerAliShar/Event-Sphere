import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import EventIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';

function Navigation() {
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col justify-between h-full bg-blue-500">
            <h1 className='text-4xl text-white mb-6 py-3 text-center bg-gradient-to-r from-blue-600 to-purple-700'>
                EventSphere
            </h1>
            <div className='mx-auto'>
                <ul className="space-y-2">
                    <li className="hover:bg-blue-800 rounded p-2 flex items-center text-white">
                        <DashboardIcon className="mr-2" />
                        <Link to="/about">Dashboard</Link>
                    </li>
                    <li className="hover:bg-blue-800 rounded p-2 flex items-center text-white">
                        <EventIcon className="mr-2" />
                        <Link to="/dashboard/events">Events</Link>
                    </li>
                    <li className="hover:bg-blue-800 rounded p-2 flex items-center text-white">
                        <PersonIcon className="mr-2" />
                        <Link to="/dashboard/profile">Profile</Link>
                    </li>
                    <li className="hover:bg-blue-800 rounded p-2 flex items-center text-white">
                        <GroupIcon className="mr-2" />
                        <Link to="/dashboard/users">Users</Link>
                    </li>
                </ul>
            </div>
            <div className="mt-auto p-10">
                <button className="hover:bg-red-600 bg-red-500 text-white rounded p-2 flex items-center w-full" onClick={() => dispatch(logout())}>
                    <LogoutIcon className="mr-2" />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
}

export default Navigation;
// src/components/Profile.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Logout = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center text-xl font-semibold hover:text-blue-600"
                >
                    <FaUserCircle className="mr-2 text-2xl" />
                </button>
            </div>
            {showDropdown && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1">
                        <Link
                            to="/profile"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            View Profile
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Logout;

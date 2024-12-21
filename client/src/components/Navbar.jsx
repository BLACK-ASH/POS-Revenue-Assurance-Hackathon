// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for navigation

const Navbar = () => {
    return (
        <nav className="bg-base-200 p-4">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                <div className="text-2xl  font-semibold">
                    <span className='text-secondary'>
                        Revenue
                    </span>
                    <span className='text-primary'>
                        Assurance
                    </span>
                </div>

                <ul className="flex  space-x-6">
                    <li>
                        <NavLink
                            to="/"
                            className=" hover:text-blue-500 active:text-blue-600"
                            activeClassName="font-bold text-blue-400"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard"
                            className=" hover:text-blue-500 active:text-blue-600"
                            activeClassName="font-bold text-blue-400"
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/analytics"
                            className=" hover:text-blue-500 active:text-blue-600"
                            activeClassName="font-bold text-blue-400"
                        >
                            Analytics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className=" hover:text-blue-500 active:text-blue-600"
                            activeClassName="font-bold text-blue-400"
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>

                {/* Optional: Add a button styled with DaisyUI */}
                <button className="btn btn-neutral">Sign Up</button>
            </div>
        </nav>
    );
};

export default Navbar;

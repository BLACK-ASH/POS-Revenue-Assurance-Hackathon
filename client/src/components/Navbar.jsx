// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for navigation

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle mobile menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-base-200 p-4">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                <div className="text-2xl font-semibold">
                    <span className="text-secondary">Revenue</span>
                    <span className="text-primary">Assurance</span>
                </div>

                {/* Mobile Menu Hamburger Icon */}
                <div className="sm:hidden">
                    <button onClick={toggleMenu} className="text-2xl">
                        <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} />
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden sm:flex items-center gap-3 justify-end">
                    <ul className="flex space-x-6">
                        <li>
                            <NavLink
                                to="/"
                                className="hover:text-blue-500 active:text-blue-600"
                                activeClassName="font-bold text-blue-400"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className="hover:text-blue-500 active:text-blue-600"
                                activeClassName="font-bold text-blue-400"
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/analytics"
                                className="hover:text-blue-500 active:text-blue-600"
                                activeClassName="font-bold text-blue-400"
                            >
                                Analytics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/login"
                                className="hover:text-blue-500 active:text-blue-600"
                                activeClassName="font-bold text-blue-400"
                            >
                                Login
                            </NavLink>
                        </li>
                    </ul>

                    <button className="btn btn-neutral">Sign Up</button>
                </div>
            </div>

            {/* Mobile Menu (Hamburger) */}
            <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col items-center space-y-4 p-4">
                    <li>
                        <NavLink
                            to="/"
                            className="hover:text-blue-500 active:text-blue-600"
                            activeClassName="font-bold text-blue-400"
                            onClick={() => setIsMenuOpen(false)} // Close menu on click
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard"
                            className="hover:text-blue-500 active:text-blue-600"
                            activeClassName="font-bold text-blue-400"
                            onClick={() => setIsMenuOpen(false)} // Close menu on click
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/analytics"
                            className="hover:text-blue-500 active:text-blue-600"
                            activeClassName="font-bold text-blue-400"
                            onClick={() => setIsMenuOpen(false)} // Close menu on click
                        >
                            Analytics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className="hover:text-blue-500 active:text-blue-600"
                            activeClassName="font-bold text-blue-400"
                            onClick={() => setIsMenuOpen(false)} // Close menu on click
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className={`w-64 bg-base-200 p-4 fixed sm:static transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 h-full`}>
                <h2 className="text-2xl font-semibold text-center text-primary mb-6">Dashboard</h2>
                <ul className="menu p-2 space-y-4">
                    <li>
                        <Link to="/dashboard" className="menu-item text-primary hover:text-secondary">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/analytics" className="menu-item text-primary hover:text-secondary">Analytics</Link>
                    </li>
                    <li>
                        <Link to="/retailers" className="menu-item text-primary hover:text-secondary">Retailers</Link>
                    </li>
                    <li>
                        <Link to="/settings" className="menu-item text-primary hover:text-secondary">Settings</Link>
                    </li>
                    <li>
                        <Link to="/login" className="menu-item text-primary hover:text-secondary">Logout</Link>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 sm:ml-64">
                {/* Mobile Navbar */}
                <div className="sm:hidden flex justify-between items-center mb-6">
                    <button className="btn btn-primary" onClick={toggleSidebar}>
                        Menu
                    </button>
                    <h2 className="text-3xl font-semibold text-primary">Dashboard</h2>
                </div>

                {/* Header for larger screens */}
                <div className="hidden sm:flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-semibold text-primary">Dashboard Overview</h2>
                    <div className="flex items-center gap-3">
                        <button className="btn btn-primary">New Report</button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Total Revenue Card */}
                    <div className="card bg-primary text-white shadow-xl">
                        <div className="card-body">
                            <h3 className="text-xl font-semibold">Total Revenue</h3>
                            <p className="text-3xl font-bold">$250,000</p>
                            <p className="text-sm mt-2">Month-to-Date</p>
                        </div>
                    </div>

                    {/* New Users Card */}
                    <div className="card bg-accent text-white shadow-xl">
                        <div className="card-body">
                            <h3 className="text-xl font-semibold">New Users</h3>
                            <p className="text-3xl font-bold">1,200</p>
                            <p className="text-sm mt-2">This Month</p>
                        </div>
                    </div>

                    {/* Active Sessions Card */}
                    <div className="card bg-secondary text-white shadow-xl">
                        <div className="card-body">
                            <h3 className="text-xl font-semibold">Active Sessions</h3>
                            <p className="text-3xl font-bold">850</p>
                            <p className="text-sm mt-2">Currently Active</p>
                        </div>
                    </div>
                </div>

                {/* Recent Activity Section */}
                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Recent Activity</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center justify-between">
                            <div className="flex gap-2">
                                <span className="text-lg text-primary">User #1012 completed the registration process.</span>
                                <span className="badge badge-success">Completed</span>
                            </div>
                            <span className="text-sm text-gray-500">2 hours ago</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <div className="flex gap-2">
                                <span className="text-lg text-primary">New purchase by User #3021.</span>
                                <span className="badge badge-info">Purchase</span>
                            </div>
                            <span className="text-sm text-gray-500">3 hours ago</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <div className="flex gap-2">
                                <span className="text-lg text-primary">System update completed.</span>
                                <span className="badge badge-warning">Update</span>
                            </div>
                            <span className="text-sm text-gray-500">5 hours ago</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

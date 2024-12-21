// src/pages/Analytics.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Analytics = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className={`w-64 bg-base-200 p-4 fixed sm:static transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 h-full`}>
                <h2 className="text-2xl font-semibold text-center text-primary mb-6">Analytics</h2>
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
                    <h2 className="text-3xl font-semibold text-primary">Analytics</h2>
                </div>

                {/* Header for larger screens */}
                <div className="hidden sm:flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-semibold text-primary">Analytics Overview</h2>
                    <div className="flex items-center gap-3">
                        <button className="btn btn-primary">Export Data</button>
                    </div>
                </div>

                {/* Analytics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Sales Performance Card */}
                    <div className="card bg-primary text-white shadow-xl">
                        <div className="card-body">
                            <h3 className="text-xl font-semibold">Sales Performance</h3>
                            <p className="text-3xl font-bold">$120,000</p>
                            <p className="text-sm mt-2">Month-to-Date</p>
                        </div>
                    </div>

                    {/* Conversion Rate Card */}
                    <div className="card bg-accent text-white shadow-xl">
                        <div className="card-body">
                            <h3 className="text-xl font-semibold">Conversion Rate</h3>
                            <p className="text-3xl font-bold">8.5%</p>
                            <p className="text-sm mt-2">Increase from last week</p>
                        </div>
                    </div>

                    {/* Active Users Card */}
                    <div className="card bg-secondary text-white shadow-xl">
                        <div className="card-body">
                            <h3 className="text-xl font-semibold">Active Users</h3>
                            <p className="text-3xl font-bold">4,500</p>
                            <p className="text-sm mt-2">Currently Active</p>
                        </div>
                    </div>
                </div>

                {/* Analytics Charts Section */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Chart Card 1 */}
                    <div className="card shadow-xl bg-base-100">
                        <div className="card-body">
                            <h3 className="text-xl font-semibold text-primary">Monthly Sales Trend</h3>
                            <div className="h-72 bg-gray-200 rounded-md">
                                {/* Placeholder for Chart (You can use Chart.js or Recharts here) */}
                                <p className="text-center mt-24 text-gray-600">Chart Placeholder</p>
                            </div>
                        </div>
                    </div>

                    {/* Chart Card 2 */}
                    <div className="card shadow-xl bg-base-100">
                        <div className="card-body">
                            <h3 className="text-xl font-semibold text-primary">Customer Acquisition</h3>
                            <div className="h-72 bg-gray-200 rounded-md">
                                {/* Placeholder for Chart (You can use Chart.js or Recharts here) */}
                                <p className="text-center mt-24 text-gray-600">Chart Placeholder</p>
                            </div>
                        </div>
                    </div>

                    {/* Chart Card 3 */}
                    <div className="card shadow-xl bg-base-100">
                        <div className="card-body">
                            <h3 className="text-xl font-semibold text-primary">Retailer Performance</h3>
                            <div className="h-72 bg-gray-200 rounded-md">
                                {/* Placeholder for Chart (You can use Chart.js or Recharts here) */}
                                <p className="text-center mt-24 text-gray-600">Chart Placeholder</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Insights Section */}
                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Key Insights</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                <span className="text-lg text-primary">Sales increased by 15% compared to last quarter.</span>
                                <span className="badge badge-success">Positive Trend</span>
                            </div>
                            <span className="text-sm text-gray-500">Last Updated: 1 day ago</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                <span className="text-lg text-primary">Customer acquisition is up by 25% in the last month.</span>
                                <span className="badge badge-info">Growing</span>
                            </div>
                            <span className="text-sm text-gray-500">Last Updated: 2 hours ago</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                <span className="text-lg text-primary">Top 3 performing retailers have increased sales by 10%.</span>
                                <span className="badge badge-warning">In Progress</span>
                            </div>
                            <span className="text-sm text-gray-500">Last Updated: 4 hours ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;

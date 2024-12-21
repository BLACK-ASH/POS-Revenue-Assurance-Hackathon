import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Example data for charts
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Revenue (₹)',
        data: [5000, 10000, 7500, 12500, 15000, 20000],
        borderColor: '#4F46E5',
        backgroundColor: 'rgba(79, 70, 229, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Daily Active Users',
        data: [100, 200, 150, 180, 250, 300, 400],
        backgroundColor: '#10B981',
        borderRadius: 10,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Dashboard Insights' },
    },
  };

  return (
    <div className="flex h-screen bg-gray-100">
     

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between bg-white shadow px-6 py-4">
          <div className="flex items-center space-x-4">
            <button
              className="sm:hidden text-gray-500 hover:text-indigo-600"
              onClick={toggleSidebar}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-6">
            <i className="fas fa-search text-gray-500 hover:text-indigo-600"></i>
            <i className="fas fa-bell text-gray-500 hover:text-indigo-600"></i>
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl text-gray-700">Total Revenue</h3>
              <p className="text-3xl font-bold text-indigo-600 mt-4">₹5,00,000</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl text-gray-700">Active Users</h3>
              <p className="text-3xl font-bold text-green-500 mt-4">12,500</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl text-gray-700">New Signups</h3>
              <p className="text-3xl font-bold text-blue-500 mt-4">500</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue Chart */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Revenue Trend</h4>
              <Line data={lineData} options={chartOptions} />
            </div>

            {/* Users Chart */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Active Users</h4>
              <Bar data={barData} options={chartOptions} />
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h4>
            <ul className="space-y-4">
              <li className="flex items-center justify-between text-gray-700">
                <span>User John Doe signed up.</span>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </li>
              <li className="flex items-center justify-between text-gray-700">
                <span>Revenue reached ₹5,00,000 milestone.</span>
                <span className="text-sm text-gray-500">1 day ago</span>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

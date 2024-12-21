import React, { useEffect, useState } from 'react';
import api from '../services/axios';
import { Bar, Line } from 'react-chartjs-2';
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
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState({
    totalNetSales: 0,
    transactionCount: 0,
    avgNetSales: 0,
    transactionVolume: [],
    storeWiseSales: [],
    recentTransactions: [],
  });
  const [loading, setLoading] = useState(true);

  const fetchAnalytics = async () => {
    try {
      const response = await api.get('/transactions/transactions');
      console.log('Response data:', response.data);

      const transactions = Array.isArray(response.data) ? response.data : [];
      if (transactions.length === 0) {
        console.warn('No transactions found.');
        setLoading(false);
        return;
      }

      const totalNetSales = transactions.reduce(
        (acc, trans) => acc + (trans.netSalesHeaderValues || 0),
        0
      );
      const transactionCount = transactions.length;
      const avgNetSales = transactionCount > 0 ? totalNetSales / transactionCount : 0;

      const transactionVolume = transactions.reduce((acc, trans) => {
        const month = new Date(trans.transDate).toLocaleString('default', { month: 'long' });
        acc[month] = (acc[month] || 0) + (trans.netSalesHeaderValues || 0);
        return acc;
      }, {});

      const storeWiseSales = transactions.reduce((acc, trans) => {
        acc[trans.storeDisplayName] = (acc[trans.storeDisplayName] || 0) + (trans.netSalesHeaderValues || 0);
        return acc;
      }, {});

      const recentTransactions = transactions.slice(0, 10);

      setAnalyticsData({
        totalNetSales,
        transactionCount,
        avgNetSales,
        transactionVolume: Object.entries(transactionVolume).map(([month, value]) => ({ month, value })),
        storeWiseSales: Object.entries(storeWiseSales).map(([store, value]) => ({ store, value })),
        recentTransactions,
      });

      setLoading(false);
    } catch (error) {
      console.error('Error fetching transactions:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="p-8 space-y-6 bg-gray-50">
      <h1 className="text-3xl font-semibold text-gray-800">Analytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-medium text-gray-700">Total Net Sales</h3>
          <p className="text-2xl text-green-600">₹{analyticsData.totalNetSales.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-medium text-gray-700">Transaction Count</h3>
          <p className="text-2xl text-blue-600">{analyticsData.transactionCount}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-medium text-gray-700">Average Net Sales</h3>
          <p className="text-2xl text-yellow-600">₹{analyticsData.avgNetSales.toFixed(2)}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Monthly Transaction Volume</h3>
          <Bar
            data={{
              labels: analyticsData.transactionVolume.map((item) => item.month),
              datasets: [
                {
                  label: 'Net Sales',
                  data: analyticsData.transactionVolume.map((item) => item.value),
                  backgroundColor: 'rgba(75, 192, 192, 0.6)',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Transaction Volume by Month' },
              },
            }}
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Store-wise Sales</h3>
          <Line
            data={{
              labels: analyticsData.storeWiseSales.map((item) => item.store),
              datasets: [
                {
                  label: 'Net Sales',
                  data: analyticsData.storeWiseSales.map((item) => item.value),
                  backgroundColor: 'rgba(153, 102, 255, 0.6)',
                  borderColor: 'rgba(153, 102, 255, 1)',
                  borderWidth: 2,
                  fill: true,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Sales by Store' },
              },
            }}
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Recent Transactions</h3>
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b">Transaction No</th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b">Store</th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b">Date</th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b">Net Sales</th>
            </tr>
          </thead>
          <tbody>
            {analyticsData.recentTransactions.map((trans) => (
              <tr key={trans._id} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-700 border-b">{trans.transNo}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border-b">{trans.storeDisplayName}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border-b">
                  {new Date(trans.transDate).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 border-b">₹{trans.netSalesHeaderValues}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Analytics;

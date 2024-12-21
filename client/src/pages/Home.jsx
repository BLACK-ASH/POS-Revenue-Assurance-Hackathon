// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-base-100 min-h-screen">
            {/* Hero Section */}
            <section className="hero min-h-screen bg-gradient-to-r from-blue-500 to-green-500 text-white">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                        <h1 className="text-5xl font-semibold leading-tight mb-4">
                            Welcome to Revenue Assurance
                        </h1>
                        <p className="text-lg mb-6">
                            Automate and streamline your sales processes with POS Revenue Assurance to maximize your operational efficiency and revenue growth.
                        </p>
                        <Link to="/login">
                            <button className="btn btn-primary mr-4">Get Started</button>
                        </Link>
                        <Link to="/analytics">
                            <button className="btn btn-outline btn-secondary">View Analytics</button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-base-200">
                <div className="max-w-screen-xl mx-auto text-center">
                    <h2 className="text-4xl font-semibold mb-6">Key Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="card w-full bg-white shadow-lg hover:shadow-xl transition-all">
                            <div className="card-body">
                                <h3 className="text-xl font-bold mb-4">Real-Time Sales Tracking</h3>
                                <p>Monitor real-time sales performance and make informed decisions.</p>
                            </div>
                        </div>
                        <div className="card w-full bg-white shadow-lg hover:shadow-xl transition-all">
                            <div className="card-body">
                                <h3 className="text-xl font-bold mb-4">Data Accuracy</h3>
                                <p>Ensure reliable and accurate data reporting for better operational insights.</p>
                            </div>
                        </div>
                        <div className="card w-full bg-white shadow-lg hover:shadow-xl transition-all">
                            <div className="card-body">
                                <h3 className="text-xl font-bold mb-4">Flexible POS Integration</h3>
                                <p>Seamless POS system integration for optimized billing and reporting.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-base-100">
                <div className="max-w-screen-xl mx-auto text-center">
                    <h2 className="text-4xl font-semibold mb-6">What Our Users Say</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <div className="card w-full sm:w-1/3 bg-white shadow-lg p-6">
                            <p className="text-lg italic mb-4">"Revenue Assurance has completely transformed how we track and report sales. Our process is now automated, and the insights are invaluable!"</p>
                            <p className="font-semibold">John Doe</p>
                            <p className="text-sm text-gray-500">Retail Manager</p>
                        </div>
                        <div className="card w-full sm:w-1/3 bg-white shadow-lg p-6">
                            <p className="text-lg italic mb-4">"The integration was seamless, and our operational efficiency has drastically improved. Highly recommend it to other operators."</p>
                            <p className="font-semibold">Jane Smith</p>
                            <p className="text-sm text-gray-500">Mall Operator</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-gradient-to-r from-green-500 to-blue-500 text-white text-center">
                <h2 className="text-3xl font-semibold mb-6">Ready to boost your sales operations?</h2>
                <p className="text-lg mb-6">Start using Revenue Assurance today and enhance your operational efficiency with real-time data insights!</p>
                <Link to="/login">
                    <button className="btn btn-primary">Get Started</button>
                </Link>
            </section>
        </div>
    );
};

export default Home;

// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill in all fields.');
        } else {
            setError('');
            // Handle form submission logic here (e.g., API call)
            console.log('Form Submitted');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200">
            <div className="card w-full sm:w-96 bg-white shadow-lg">
                <div className="card-body p-8">
                    <h2 className="text-3xl font-semibold text-center mb-4 text-primary">Login</h2>

                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                    <form onSubmit={handleSubmit}>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control mb-6">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control flex items-center justify-between mb-6">
                            <Link to="/forgot-password" className="text-primary">Forgot Password?</Link>
                        </div>

                        <div className="form-control">
                            <button type="submit" className="btn btn-primary w-full">Login</button>
                        </div>
                    </form>

                    <div className="text-center mt-4">
                        <p>Don't have an account? <Link to="/signup" className="text-primary">Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

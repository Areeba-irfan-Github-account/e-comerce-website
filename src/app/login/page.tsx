"use client"
// pages/login.tsx
import React, { useState } from 'react';
import Nav from '../../../components/Navbar';


const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    if (email === '' || password === '') {
      setError('Please fill out all fields.');
    } else {
      setError('');
      // Implement your login logic here
      console.log('Logged in with:', { email, password });
    }
  };

  return (
    <>
      <Nav />
      <div className="flex items-center justify-center min-h-screen bg-pink-300">
        <div className="w-full max-w-md bg-pink-200 p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-700 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center">
            Don't have an account? <a href="/signup" className="text-indigo-600 hover:text-indigo-500">Sign up</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

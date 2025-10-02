import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GenStyle from '../styles/style.module.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: Implement email and password login logic
        console.log('Logging in with:', { email, password });
        alert('Email/Password login logic not implemented.');
    };

    const handleGoogleLogin = () => {
        // TODO: Implement Google OAuth login logic
        console.log('Logging in with Google');
        alert('Google OAuth login logic not implemented.');
    };

    const handleFacebookLogin = () => {
        // TODO: Implement Facebook OAuth login logic
        console.log('Logging in with Facebook');
        alert('Facebook OAuth login logic not implemented.');
    };

    return (
        <div className={GenStyle.container}>
            <div className="max-w-md w-full mx-auto my-20 px-10 py-12 bg-white rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center tracking-tight">
                    Login
                </h2>

                <form onSubmit={handleEmailLogin} className="mb-7">
                    <div className="mb-6">
                        <label 
                            htmlFor="email" 
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            required
                            className="w-full px-4 py-3 text-gray-900 bg-white border-2 border-gray-200 rounded-lg outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                        />
                    </div>

                    <div className="mb-6">
                        <label 
                            htmlFor="password" 
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                            className="w-full px-4 py-3 text-gray-900 bg-white border-2 border-gray-200 rounded-lg outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full mt-2 px-5 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                    >
                        Login
                    </button>
                </form>

                <div className="relative flex items-center justify-center my-7">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative px-4 bg-white">
                        <span className="text-sm font-medium text-gray-500 tracking-wide">
                            OR
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <button 
                        onClick={handleGoogleLogin} 
                        className="w-full px-5 py-3.5 bg-white text-gray-700 font-semibold border-2 border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                    >
                        Login with Google
                    </button>
                    <button 
                        onClick={handleFacebookLogin} 
                        className="w-full px-5 py-3.5 bg-white text-gray-700 font-semibold border-2 border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                    >
                        Login with Facebook
                    </button>
                </div>

                <div className="mt-7 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link 
                            to="/signup" 
                            className="text-blue-500 font-semibold hover:text-blue-600 hover:underline transition-colors duration-200"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
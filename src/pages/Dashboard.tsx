import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChartLine, FaBox, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gradient-to-br from-blue-700 to-indigo-800 text-white shadow-lg">
                <div className="p-6 border-b border-blue-600">
                    <h1 className="text-3xl font-bold text-center">Confimly</h1>
                </div>
                <nav className="mt-6">
                    <ul>
                        <li className="mb-2">
                            <Link 
                                to="/dashboard" 
                                className="flex items-center gap-3 p-4 text-lg font-medium hover:bg-blue-600 transition-colors duration-200"
                            >
                                <FaHome className="w-5 h-5" />
                                Home
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link 
                                to="/dashboard/analytics" 
                                className="flex items-center gap-3 p-4 text-lg font-medium hover:bg-blue-600 transition-colors duration-200"
                            >
                                <FaChartLine className="w-5 h-5" />
                                Analytics
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link 
                                to="/dashboard/products" 
                                className="flex items-center gap-3 p-4 text-lg font-medium hover:bg-blue-600 transition-colors duration-200"
                            >
                                <FaBox className="w-5 h-5" />
                                Products
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link 
                                to="/dashboard/customers" 
                                className="flex items-center gap-3 p-4 text-lg font-medium hover:bg-blue-600 transition-colors duration-200"
                            >
                                <FaUsers className="w-5 h-5" />
                                Customers
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link 
                                to="/dashboard/settings" 
                                className="flex items-center gap-3 p-4 text-lg font-medium hover:bg-blue-600 transition-colors duration-200"
                            >
                                <FaCog className="w-5 h-5" />
                                Settings
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link 
                                to="/logout" 
                                className="flex items-center gap-3 p-4 text-lg font-medium hover:bg-blue-600 transition-colors duration-200"
                            >
                                <FaSignOutAlt className="w-5 h-5" />
                                Logout
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    );
    
};

export default Dashboard;


           
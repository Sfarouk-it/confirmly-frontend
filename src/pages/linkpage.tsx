import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { setupBusiness } from '../services/businessService';
import { FaTiktok , FaInstagram , FaFacebook , FaWhatsapp} from "react-icons/fa6";

const LinkPage = () => {
    const [brandName, setBrandName] = useState('');
    const [businessType, setBusinessType] = useState('');
    const [businessField, setBusinessField] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await setupBusiness(brandName, businessType, businessField); // The variable names here are fine
            console.log(response);
            setFormSubmitted(true);
        } catch (error) {
            console.error('Error setting up business:', error);
            alert('Error setting up business. Please try again.');
        }
    };

    const handleFacebookLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.location.href = "https://confirmly.onrender.com/api/authantification/login/facebook";
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 py-12 px-4">
            <div className="max-w-md w-full bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                <div className="px-8 pt-10 pb-8">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">
                            Set Up Your Store
                        </h2>
                        <p className="text-gray-600 text-sm">Tell us about your business</p>
                    </div>

                    {!formSubmitted && (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label 
                                    htmlFor="storeName" 
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    brand Name
                                </label>
                                <input
                                    type="text"
                                    id="brandName"
                                    value={brandName}
                                    onChange={(e) => setBrandName(e.target.value)}
                                    placeholder="e.g., My Awesome Shop"
                                    required
                                    className="w-full px-4 py-3 text-gray-900 bg-white/50 border border-gray-300 rounded-xl outline-none transition-all duration-300 focus:border-green-500 focus:ring-4 focus:ring-green-100 focus:bg-white placeholder:text-gray-400"
                                />
                            </div>

                            <div>
                                <label 
                                    htmlFor="storeName" 
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    business type
                                </label>
                                <select
                                    id="businessType"
                                    value={businessType}
                                    onChange={(e) => setBusinessType(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 text-gray-900 bg-white/50 border border-gray-300 rounded-xl outline-none transition-all duration-300 focus:border-green-500 focus:ring-4 focus:ring-green-100 focus:bg-white placeholder:text-gray-400"
                                >
                                    <option value="" disabled>
                                        Select your business type
                                    </option>
                                    <option value="soleProprietorship">Sole Proprietorship</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="corporation">Corporation</option>
                                    <option value="llc">Limited Liability Company (LLC)</option>
                                    <option value="nonProfit">Non-Profit Organization</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="businessField"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Business Field
                                </label>
                                <select
                                    id="businessField"
                                    value={businessField}
                                    onChange={(e) => setBusinessField(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 text-gray-900 bg-white/50 border border-gray-300 rounded-xl outline-none transition-all duration-300 focus:border-green-500 focus:ring-4 focus:ring-green-100 focus:bg-white placeholder:text-gray-400"
                                >
                                    <option value="" disabled>
                                        Select your business field
                                    </option>
                                    <option value="retail">Retail</option>
                                    <option value="food">Food & Beverage</option>
                                    <option value="services">Services</option>
                                    <option value="technology">Technology</option>
                                    <option value="education">Education</option>
                                    <option value="other">Other</option>
                                </select>

                            </div>

                            <button
                                type="submit"
                                className="w-full mt-6 px-6 py-3.5 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                            >
                                next
                            </button>
                        </form>
                    )}

                    {formSubmitted && (
                        <div className="text-center mb-8">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <button 
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-700 font-medium border border-gray-300 rounded-xl shadow-sm hover:bg-gray-50 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                                    onClick={handleFacebookLogin}
                                > 
                                    <FaFacebook className="w-5 h-5 text-blue-600"/>
                                    <span className="text-sm">Link Facebook page</span>
                                </button>
                                <button 
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-700 font-medium border border-gray-300 rounded-xl shadow-sm hover:bg-gray-50 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                                >
                                    <FaInstagram className="w-5 h-5 text-pink-500"/>
                                    <span className="text-sm">link instagram account</span>
                                </button>
                                <button 
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-700 font-medium border border-gray-300 rounded-xl shadow-sm hover:bg-gray-50 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                                >
                                    <FaWhatsapp className="w-5 h-5 text-green-500"/>
                                    <span className="text-sm">link whatsup account</span>
                                </button>
                                <button 
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-700 font-medium border border-gray-300 rounded-xl shadow-sm hover:bg-gray-50 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                                >
                                    <FaTiktok className="w-5 h-5 text-black"/>
                                    <span className="text-sm">link tik tok account</span>
                                </button>
                            </form>

                            <div className="px-8 py-6 bg-white border-t border-gray-200">
                                <p className="text-sm text-gray-600 text-center">
                                    Or{' '}
                                    <Link 
                                        to="/dashboard" 
                                        className="text-indigo-600 font-semibold hover:text-indigo-700 hover:underline transition-colors duration-200"
                                    >
                                        Skip
                                    </Link>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LinkPage;

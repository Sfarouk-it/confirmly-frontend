import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginwEmail , facebookAuth } from '../services/Authantification';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const response = await loginwEmail(email, password);
            console.log('login response:', response);
            navigate('/accountsetup');
        } catch (error: any) {
            console.error('Signup error:', error);
            if (error.response && error.response.data) {
                alert(`Signup failed: ${error.response.data}`);
            } else {
                alert('Signup failed. Please try again.');
            }
        }
    };

    const handleGoogleLogin = () => {
        console.log('Logging in with Google');
        alert('Google OAuth login logic not implemented.');
    };

    const handleFacebookLogin = async () => {
        try {
            const authURL = await facebookAuth();

            const width = 600, height = 600;
            const left = window.innerWidth / 2 - width / 2;
            const top = window.innerHeight / 2 - height / 2;

            window.open(
                authURL,
                "Facebook Login",
                `width=${width},height=${height},top=${top},left=${left}`
            );

            // 3. انتظر النتيجة (عن طريق message event)
            window.addEventListener("message", (event) => {
                if (event.origin !== "https://confirmly.onrender.com") return; // أمان
                if (event.data.type === "FB_LOGIN_SUCCESS") {
                console.log("تم تسجيل الدخول:", event.data.user);
                }
            });

        }
        catch(error){
            console.error("خطأ أثناء الاتصال:", error);
        }
    };

    return (
        <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4`}>
            <div className="max-w-md w-full bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                <div className="px-8 pt-10 pb-8">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                            Welcome Back
                        </h2>
                        <p className="text-gray-600 text-sm">Sign in to continue to your account</p>
                    </div>

                    <form onSubmit={handleEmailLogin} className="space-y-5">
                        <div>
                            <label 
                                htmlFor="email" 
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@company.com"
                                required
                                className="w-full px-4 py-3 text-gray-900 bg-white/50 border border-gray-300 rounded-xl outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:bg-white placeholder:text-gray-400"
                            />
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label 
                                    htmlFor="password" 
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <Link 
                                    to="/forgot-password" 
                                    className="text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors"
                                >
                                    Forgot?
                                </Link>
                            </div>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••••"
                                required
                                className="w-full px-4 py-3 text-gray-900 bg-white/50 border border-gray-300 rounded-xl outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:bg-white placeholder:text-gray-400"
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="w-full mt-6 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="relative flex items-center justify-center my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative px-4 bg-white">
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button 
                            onClick={handleGoogleLogin} 
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-700 font-medium border border-gray-300 rounded-xl shadow-sm hover:bg-gray-50 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            <span className="text-sm">Google</span>
                        </button>
                        <button 
                            onClick={handleFacebookLogin} 
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-700 font-medium border border-gray-300 rounded-xl shadow-sm hover:bg-gray-50 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                        >
                            <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            <span className="text-sm">Facebook</span>
                        </button>
                    </div>
                </div>

                <div className="px-8 py-6 bg-gray-50/50 border-t border-gray-200">
                    <p className="text-sm text-gray-600 text-center">
                        Don't have an account?{' '}
                        <Link 
                            to="/signup" 
                            className="text-blue-600 font-semibold hover:text-blue-700 hover:underline transition-colors duration-200"
                        >
                            Create account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
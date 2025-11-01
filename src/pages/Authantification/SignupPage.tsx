import React from 'react';
import { Link } from 'react-router-dom';
import { signupwEmail } from '../../services/Authantification';

const SignupPage = () => {
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const handleEmailSigneUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        try {
            const response = await signupwEmail(email, username, password);
            console.log('Signup response:', response);
            alert('Signup successful! Please log in.');
        } catch (error: any) {
            console.error('Signup error:', error);
            if (error.response && error.response.data) {
                alert(`Signup failed: ${error.response.data}`);
            } else {
                alert('Signup failed. Please try again.');
            }
        }
    };


    const handleGoogleSigneUp = () => {
        // TODO: Implement Google OAuth signup logic
        console.log('Signing up with Google');
        alert('Google OAuth signup logic not implemented.');
    };

    const handleFacebookSigneUp = () => {
        window.location.href = "https://confirmly.onrender.com/api/permissions/facebookpermissions";
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4">
            <div className="max-w-md w-full bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                <div className="px-8 pt-10 pb-8">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-lg mb-4">
                            <span className="text-3xl font-bold text-white">C</span>
                        </div>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                            Create Account
                        </h2>
                        <p className="text-gray-600 text-sm">Start your journey with us today</p>
                    </div>

                    <form onSubmit={handleEmailSigneUp} className="space-y-5">
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
                                className="w-full px-4 py-3 text-gray-900 bg-white/50 border border-gray-300 rounded-xl outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:bg-white placeholder:text-gray-400"
                            />
                        </div>

                        <div>
                            <label 
                                htmlFor="username" 
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Email Address
                            </label>
                            <input
                                type="username"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="username"
                                required
                                className="w-full px-4 py-3 text-gray-900 bg-white/50 border border-gray-300 rounded-xl outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:bg-white placeholder:text-gray-400"
                            />
                        </div>

                        <div>
                            <label 
                                htmlFor="password" 
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••••"
                                required
                                className="w-full px-4 py-3 text-gray-900 bg-white/50 border border-gray-300 rounded-xl outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:bg-white placeholder:text-gray-400"
                            />
                        </div>

                        <div>
                            <label 
                                htmlFor="confirmPassword" 
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="••••••••••"
                                required
                                className="w-full px-4 py-3 text-gray-900 bg-white/50 border border-gray-300 rounded-xl outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:bg-white placeholder:text-gray-400"
                            />
                        </div>

                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="terms"
                                required
                                className="w-4 h-4 mt-1 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                            <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
                                I agree to the{' '}
                                <Link to="/terms" className="text-indigo-600 hover:text-indigo-700 font-medium">
                                    Terms of Service
                                </Link>
                                {' '}and{' '}
                                <Link to="/privacy" className="text-indigo-600 hover:text-indigo-700 font-medium">
                                    Privacy Policy
                                </Link>
                            </label>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full mt-6 px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                        >
                            Create Account
                        </button>
                    </form>

                    <div className="relative flex items-center justify-center my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative px-4 bg-white">
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                Or sign up with
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button 
                            onClick={handleGoogleSigneUp} 
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
                            onClick={handleFacebookSigneUp} 
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
                        Already have an account?{' '}
                        <Link 
                            to="/" 
                            className="text-indigo-600 font-semibold hover:text-indigo-700 hover:underline transition-colors duration-200"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
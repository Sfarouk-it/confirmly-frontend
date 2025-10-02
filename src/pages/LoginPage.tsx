import React, { useState } from 'react';
import './LoginPage.css';
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
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleEmailLogin} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>

                <div className="or-divider">OR</div>

                <div className="oauth-buttons">
                    <button onClick={handleGoogleLogin} className="btn btn-google">Login with Google</button>
                    <button onClick={handleFacebookLogin} className="btn btn-facebook">Login with Facebook</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
import React from 'react';
import { Link } from 'react-router-dom';
import GenStyle from '../styles/style.module.css';
import './LoginPage.css'; // Reusing styles for consistency


const SignupPage = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleEmailSigneUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: Implement email and password login logic
        console.log('Signing up with:', { email, password });
        alert('Email/Password signup logic not implemented.');
    };

    const handleGoogleSigneUp = () => {
        // TODO: Implement Google OAuth login logic
        console.log('Signing up with Google');
        alert('Google OAuth signup logic not implemented.');
    };
    const handleFacebookSigneUp = () => {
        // TODO: Implement Facebook OAuth login logic
        console.log('Signing up with Facebook');
        alert('Facebook OAuth signup logic not implemented.');
    };


    return (
        <div className={GenStyle.container}>
            <div className="signup-container">
                <h2>Sign Up</h2>
                <h2>Login</h2>
                <form onSubmit={handleEmailSigneUp} className="signup-form">
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
                    <button onClick={handleGoogleSigneUp} className="btn btn-google">Login with Google</button>
                    <button onClick={handleFacebookSigneUp} className="btn btn-facebook">Login with Facebook</button>
                </div>

                <div className="signup-link">
                    <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                </div>
                <Link to="/">Back to Login</Link>
            </div>
        </div>
    );
};

export default SignupPage;
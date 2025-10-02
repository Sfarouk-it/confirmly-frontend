import React from 'react';
import { Link } from 'react-router-dom';
import GenStyle from '../styles/style.module.css';


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
            <div className="login-container">
                <div className="app-logo">
                    C
                </div>
                <h2>Sign Up</h2>
                <form onSubmit={handleEmailSigneUp} className="login-form">
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
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>

                <div className="or-divider">OR</div>

                <div className="oauth-buttons">
                    <button onClick={handleGoogleSigneUp} className="btn btn-google">Sign up with Google</button>
                    <button onClick={handleFacebookSigneUp} className="btn btn-facebook">Sign up with Facebook</button>
                </div>
                <div className="signup-link">
                    <p>Already have an account? <Link to="/">Log in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
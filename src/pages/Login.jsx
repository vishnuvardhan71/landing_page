import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [loginMethod, setLoginMethod] = useState('pin'); // 'pin' or 'otp'
    const [cardNumber, setCardNumber] = useState('');
    const [pin, setPin] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);

    const handlePinLogin = async (e) => {
        e.preventDefault();
        console.log('Logging in with PIN:', { cardNumber, pin });
        // Friend's logic would go here
        alert('Login successful (Mock)');
        navigate('/');
    };

    const handleOtpLogin = async (e) => {
        e.preventDefault();
        console.log('Logging in with OTP:', { cardNumber, otp });
        // Friend's logic would go here
        alert('OTP Login successful (Mock)');
        navigate('/');
    };

    const sendOTP = () => {
        if (!cardNumber) return alert('Enter Ration Card Number');
        setOtpSent(true);
        alert('OTP Sent to registered mobile!');
    };

    return (
        <div className="auth-page">
            <Navbar />
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <h2>Beneficiary login</h2>
                        <p>Access your RationShield dashboard</p>
                    </div>

                    <div className="login-toggle">
                        <button
                            className={loginMethod === 'pin' ? 'active' : ''}
                            onClick={() => setLoginMethod('pin')}
                        >
                            PIN Login
                        </button>
                        <button
                            className={loginMethod === 'otp' ? 'active' : ''}
                            onClick={() => setLoginMethod('otp')}
                        >
                            OTP Login
                        </button>
                    </div>

                    {loginMethod === 'pin' ? (
                        <form onSubmit={handlePinLogin} className="auth-form">
                            <div className="form-group">
                                <label>Ration Card Number</label>
                                <input
                                    type="text"
                                    placeholder="Enter Card Number"
                                    value={cardNumber}
                                    onChange={(e) => {
                                        const val = e.target.value.replace(/[^a-zA-Z0-9]/g, '');
                                        if (val.length <= 15) setCardNumber(val.toUpperCase());
                                    }}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Secret PIN</label>
                                <input
                                    type="password"
                                    placeholder="000000"
                                    maxLength="6"
                                    value={pin}
                                    onChange={(e) => {
                                        const val = e.target.value.replace(/\D/g, '');
                                        if (val.length <= 6) setPin(val);
                                    }}
                                    required
                                />
                            </div>
                            <button type="submit" className="auth-submit">Login Socially</button>
                        </form>
                    ) : (
                        <form onSubmit={handleOtpLogin} className="auth-form">
                            <div className="form-group">
                                <label>Ration Card Number</label>
                                <div className="input-with-action">
                                    <input
                                        type="text"
                                        placeholder="Enter Card Number"
                                        value={cardNumber}
                                        onChange={(e) => {
                                            const val = e.target.value.replace(/[^a-zA-Z0-9]/g, '');
                                            if (val.length <= 15) setCardNumber(val.toUpperCase());
                                        }}
                                        required
                                    />
                                    <button type="button" onClick={sendOTP} className="btn-inline">
                                        {otpSent ? 'Resend' : 'Send OTP'}
                                    </button>
                                </div>
                            </div>
                            {otpSent && (
                                <div className="form-group fade-in">
                                    <label>Enter 6-digit OTP</label>
                                    <input
                                        type="text"
                                        placeholder="000000"
                                        value={otp}
                                        onChange={(e) => {
                                            const val = e.target.value.replace(/\D/g, '');
                                            if (val.length <= 6) setOtp(val);
                                        }}
                                        required
                                    />
                                </div>
                            )}
                            <button type="submit" className="auth-submit" disabled={!otpSent}>Verify & Login</button>
                        </form>
                    )}

                    <div className="auth-footer">
                        <p>New user? <span onClick={() => navigate('/signup')}>Activate Account</span></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;

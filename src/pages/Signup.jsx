import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Signup.css';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        phone: '',
        cardNumber: '',
        pin: '',
        confirmPin: '',
        agreedTC: false
    });
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (formData.cardNumber.length < 5) {
            return setError('Invalid Ration Card Number');
        }

        if (formData.pin.length !== 6) {
            return setError('PIN must be exactly 6 digits');
        }

        if (formData.pin !== formData.confirmPin) {
            return setError('PINs do not match');
        }

        if (!formData.agreedTC) {
            return setError('You must agree to the Terms & Conditions');
        }

        console.log('Registering user:', formData);
        alert('Account Created Successfully!');
        navigate('/login');
    };

    return (
        <div className="auth-page">
            <Navbar />
            <div className="auth-container">
                <div className="auth-card signup-card">
                    <div className="auth-header">
                        <h2>Beneficiary Registration</h2>
                        <p>Join the RationShield Transparency Network</p>
                    </div>

                    {error && <div className="auth-error-banner fade-in">{error}</div>}

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Date of Birth</label>
                                <input
                                    type="date"
                                    value={formData.dob}
                                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-grid">
                            <div className="form-group">
                                <label>Mobile Number</label>
                                <input
                                    type="tel"
                                    placeholder="+91"
                                    value={formData.phone}
                                    onChange={(e) => {
                                        const val = e.target.value.replace(/\D/g, '');
                                        if (val.length <= 10) setFormData({ ...formData, phone: val });
                                    }}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Ration Card Number</label>
                                <input
                                    type="text"
                                    placeholder="ABC1234567"
                                    value={formData.cardNumber}
                                    onChange={(e) => {
                                        const val = e.target.value.replace(/[^a-zA-Z0-9]/g, '');
                                        if (val.length <= 15) setFormData({ ...formData, cardNumber: val.toUpperCase() });
                                    }}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-grid">
                            <div className="form-group">
                                <label>Set 6-Digit PIN</label>
                                <input
                                    type="password"
                                    placeholder="000000"
                                    maxLength="6"
                                    value={formData.pin}
                                    onChange={(e) => {
                                        const val = e.target.value.replace(/\D/g, '');
                                        if (val.length <= 6) setFormData({ ...formData, pin: val });
                                    }}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Confirm 6-Digit PIN</label>
                                <input
                                    type="password"
                                    placeholder="000000"
                                    maxLength="6"
                                    value={formData.confirmPin}
                                    onChange={(e) => {
                                        const val = e.target.value.replace(/\D/g, '');
                                        if (val.length <= 6) setFormData({ ...formData, confirmPin: val });
                                    }}
                                    required
                                />
                            </div>
                        </div>

                        <div className="pin-guidelines">
                            <h4>🛡️ Security Guidelines</h4>
                            <ul>
                                <li>Must be exactly 6 digits.</li>
                                <li>Do not share your PIN with anyone.</li>
                                <li>Account locks after 3 failed attempts.</li>
                                <li>Contact your ration shop for PIN reset.</li>
                            </ul>
                        </div>

                        <div className="form-checkbox">
                            <input
                                type="checkbox"
                                id="tc"
                                checked={formData.agreedTC}
                                onChange={(e) => setFormData({ ...formData, agreedTC: e.target.checked })}
                                required
                            />
                            <label htmlFor="tc">I agree to the <span className="tc-link">Terms & Conditions</span> of Ration-Shield</label>
                        </div>

                        <button type="submit" className="auth-submit">Activate account</button>
                    </form>

                    <div className="auth-footer">
                        <p>Already have an account? <span onClick={() => navigate('/login')}>Login</span></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Signup;

import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import Fotter from '../fotter/Fotter';
import { useNavigate } from 'react-router-dom';
import { verifyOtp } from '../../api';

function ForgetPasswordOtp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        otp: '',
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        // Get phone number from local storage and set it in the form data
        const storedPhoneNumber = localStorage.getItem('phoneNumber');
        setFormData((prevFormData) => ({ ...prevFormData, phoneNumber: storedPhoneNumber }));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form data
        const newErrors = {};
        if (!formData.otp.trim()) {
            newErrors.otp = 'OTP is required';
        }

        // If there are errors, set them and stop form submission
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await verifyOtp(formData.phoneNumber, formData.otp);
            console.log('API Response:', response);
      
            // Handle the response as needed
            if (response.status === 200) {
              console.log('OTP verification successful.');
              navigate('/reset-password');
            } else {
              console.error('OTP verification failed.');
              // Handle other scenarios as needed
            }
          } catch (error) {
            console.error('Error calling OTP verification API:', error);
            // Handle API call error
          }
    };

    return (
        <div>
            <Header />
            <section className="py-5 bg-dark">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6 py-5">
                            <div className="card shadow">
                                <div className="card-body p-5">
                                    <h3 className="mb-3 text-center font-weight-bold">Reset your account password</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group mb-4 mt-4">
                                            <label htmlFor="otp" className="mb-3 block text-sm text-dark dark:text-white">
                                                Your OTP
                                            </label>
                                            <input
                                                type="text"
                                                name="otp"
                                                placeholder="Enter your OTP"
                                                className={`form-control ${errors.otp ? 'is-invalid' : ''}`}
                                                value={formData.otp}
                                                onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                                            />
                                            {errors.otp && <div className="invalid-feedback">{errors.otp}</div>}
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary btn-block">
                                                Verify OTP
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Fotter />
        </div>
    );
}

export default ForgetPasswordOtp;

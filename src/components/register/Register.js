import React, { useState } from 'react';
import Header from '../header/Header';
import Fotter from '../fotter/Fotter';
import { useNavigate } from 'react-router-dom';
import { sendOtp, registerUser, verifyOTP  } from '../../api';

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        userName: '',
        password: '',
        referral: '',
        phoneNumber: '',
        otp: '',
    });

    const [errors, setErrors] = useState({});

    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.userName.trim()) {
            newErrors.userName = 'User Name is required';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        }
        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone Number is required';
        }
        if (!formData.otp.trim()) {
            newErrors.otp = 'OTP is required';
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const { status, result } = await verifyOTP(formData.phoneNumber, formData.otp, handleSuccess);
            console.log('API Status Code:', status);
            console.log('API Response:', result);
            if (status === 200) {
            //   navigate('/');
            handleSuccess();
            } else {
              console.error('Unexpected API status code:', status);
            }
          } catch (error) {
            console.error('Error calling verifyOTP API:', error);
          }
        console.log('Form submitted:', formData);
        // navigate('/login');
    };

    const handleSuccess = async () => {
        // Add your logic for successful OTP verification
        console.log('OTP verification successful');
    
        try {
          // Call the registerUser API function
          const { status, result } = await registerUser(formData);
    
          // Log the status code and result
          console.log('API Status Code:', status);
          console.log('API Response:', result);
    
          // Handle the registration success or error based on the status code
          if (status === 200) {
            console.log('User registration successful');
            // Add your logic for a successful registration
            navigate('/login');
          } else {
            // Handle other status codes if needed
            console.error('Unexpected API status code:', status);
          }
        } catch (error) {
          // Handle API call error during registration
          console.error('Error calling registerUser API:', error);
          // You can set an error state or display an error message to the user
        }
      };
    
    const handleSendOtp = async () => {
        try {
          const result = await sendOtp(formData.phoneNumber);
          console.log('OTP Sent. API Response:', result);
        } catch (error) {
          console.error('Error sending OTP:', error);
        }
      };

    return (
        <div>
            <Header />
            <section className="relative z-10 overflow-hidden pb-5 pt-5 md:pb-5 lg:pb-5 bg-dark">
                <div className="container bg-dark">
                    <div className="row justify-content-center bg-dark">
                        <div className="col-md-6">
                            <div className="shadow mx-auto max-w-500px rounded bg-white px-4 py-5">
                                <h3 className="mb-3 text-center text-2xl font-bold text-black">
                                    Create your account
                                </h3>
                                <p className="mb-3 text-center text-base font-medium text-body-color">
                                    It’s totally free and super easy
                                </p>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="userName" className="mb-3 block text-sm text-dark">
                                            User Name
                                        </label>
                                        <input
                                            type="text"
                                            name="userName"
                                            placeholder="Enter your user name"
                                            className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
                                            value={formData.userName}
                                            onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                                        />
                                        {errors.userName && (
                                            <div className="invalid-feedback">{errors.userName}</div>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="mb-3 block text-sm text-dark">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Enter your password"
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                            value={formData.password}
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        />
                                        {errors.password && (
                                            <div className="invalid-feedback">{errors.password}</div>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="referral" className="mb-3 block text-sm text-dark">
                                            Referral code (optional)
                                        </label>
                                        <input
                                            type="text"
                                            name="referral"
                                            placeholder="Enter your referral code"
                                            className="form-control"
                                            value={formData.referral}
                                            onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phoneNumber" className="mb-3 block text-sm text-dark">
                                            Mobile No.
                                        </label>
                                        <input
                                            type="text"
                                            name="phoneNumber"
                                            placeholder="Enter your mobile no."
                                            className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                                            value={formData.phoneNumber}
                                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                        />
                                        {errors.phoneNumber && (
                                            <div className="invalid-feedback">{errors.phoneNumber}</div>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="otp" className="mb-3 block text-sm text-dark">
                                            Enter verification code
                                        </label>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                name="otp"
                                                placeholder="Enter your verification code"
                                                className={`form-control ${errors.otp ? 'is-invalid' : ''}`}
                                                value={formData.otp}
                                                onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                                            />
                                            {errors.otp && (
                                                <div className="invalid-feedback">{errors.otp}</div>
                                            )}
                                            <div className="input-group-append">
                                                <button
                                                    onClick={handleSendOtp}
                                                    className="btn btn-primary"
                                                    type="button"
                                                >
                                                    Send OTP
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            id="checkboxLabel"
                                            className="form-check-input"
                                            checked={isChecked}
                                            onChange={handleCheckboxChange}
                                        />
                                        <label htmlFor="checkboxLabel" className="form-check-label">
                                            By creating an account, you agree to the{' '}
                                            <a href="/terms" className="text-primary">
                                                Terms and Conditions
                                            </a>
                                            , and our{' '}
                                            <a href="/privacy" className="text-primary">
                                                Privacy Policy
                                            </a>
                                        </label>
                                        {!isChecked && (
                                            <p className="text-danger">Please agree to the Terms and Conditions and Privacy Policy.</p>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <button className="btn btn-primary btn-block" type="submit">
                                            Sign up
                                        </button>
                                    </div>
                                </form>
                                <p className="text-center text-base font-medium text-body-color">
                                    Already using Startup?{' '}
                                    <a href="/login" className="text-primary">
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Fotter />
        </div>
    );
}

export default Register;

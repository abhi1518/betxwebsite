import React, { useState } from 'react';
import Header from '../header/Header';
import Fotter from '../fotter/Fotter';
import { useNavigate } from 'react-router-dom';
import { sendForgetOtp } from '../../api';

function ForgetPasswordPhone() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const newErrors = {};
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
    }

    // If there are errors, set them and stop form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Call the API function for sending forget OTP
      const { status, result } = await sendForgetOtp(formData.phoneNumber);

      // Handle the API response as needed
      console.log('API Status Code:', status);
      console.log('API Response:', result);

      // If the API call is successful (status code 200), save the phone number in localStorage
      if (status === 200) {
        localStorage.setItem('forgetPhoneNumber', formData.phoneNumber);
      }

      // For demonstration purposes, you can navigate to the next step
      navigate('/reset-password-otp');
    } catch (error) {
      // Handle API call error
      console.error('Error calling sendForgetOtp API:', error);
      // You can set an error state or display an error message to the user
    }
  };


  return (
    <div>
    <Header />
      <section className="py-5 bg-dark">
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="col-md-6 py-5">
              <div className="card shadow">
                <div className="card-body p-5">
                  <h3 className="mb-3 text-center font-weight-bold">Reset your account password</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-4 mt-4">
                      <label htmlFor="phoneNumber">Your Phone No.</label>
                      <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Enter your phone no."
                        className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                        value={formData.phoneNumber}
                        // onChange={handleChange}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      />
                      {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block">
                        Get OTP
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

export default ForgetPasswordPhone;

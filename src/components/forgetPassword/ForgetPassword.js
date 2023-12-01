import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import Fotter from '../fotter/Fotter';
function ForgetPassword() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: '',
    conformPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const newErrors = {};
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }

    if (!formData.conformPassword.trim()) {
      newErrors.conformPassword = 'Confirm Password is required';
    } else if (formData.password !== formData.conformPassword) {
      newErrors.conformPassword = 'Passwords do not match';
    }

    // If there are errors, set them and stop form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form submission logic goes here
    console.log('Form submitted:', formData);
    navigate('/login');
  };

  return (
    <div>
        <Header />
      <section className="relative py-5 bg-dark z-10 overflow-hidden pb-5 pt-5 md:pb-5 lg:pb-5 lg:pt-[180px]">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <div className="card shadow">
                <div className="card-body p-5">
                  <h3 className="mb-3 text-center font-weight-bold">Reset your account password</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-4 mt-4">
                      <label htmlFor="password" className="mb-3 block text-sm text-dark dark:text-white">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className={`form-control border-stroke dark:text-body-color-dark dark:shadow-two rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none ${errors.password ? 'is-invalid' : ''}`}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      />
                      {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>
                    <div className="form-group mb-4 mt-4">
                      <label htmlFor="conformPassword" className="mb-3 block text-sm text-dark dark:text-white">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="conformPassword"
                        placeholder="Enter your confirm password"
                        className={`form-control border-stroke dark:text-body-color-dark dark:shadow-two rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none ${errors.conformPassword ? 'is-invalid' : ''}`}
                        value={formData.conformPassword}
                        onChange={(e) => setFormData({ ...formData, conformPassword: e.target.value })}
                      />
                      {errors.conformPassword && <div className="invalid-feedback">{errors.conformPassword}</div>}
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block shadow-submit dark:shadow-submit-dark"
                      >
                        Proceed
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

export default ForgetPassword;

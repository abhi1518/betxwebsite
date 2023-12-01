import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import Fotter from '../fotter/Fotter';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons from react-icons library

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const newErrors = {};
    if (!formData.userName.trim()) {
      newErrors.userName = 'User Name is required';
    } else if (/\s/.test(formData.userName) || /[^\w\s]/.test(formData.userName)) {
      newErrors.userName = 'Username cannot contain spaces or special characters';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password should be at least 6 characters long';
    }

    // If there are errors, set them and stop form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Call the login API function
      const result = await loginUser(formData);

      // Handle the API response as needed
      console.log('API Response:', result);

      // For demonstration purposes, navigate to '/' on successful login
      navigate('/');
    } catch (error) {
      // Handle API call error
      console.error('Error calling loginUser API:', error);
      // You can set an error state or display an error message to the user
    }
  };

  return (
    <div>
      <Header />
      <section className="py-5 bg-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow">
                <div className="card-body p-5">
                  <h3 className="mb-3 text-center font-weight-bold">Sign in to your account</h3>
                  <p className="mb-4 text-center">Login to your account for a faster checkout.</p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-4">
                      <label htmlFor="userName">Your User Name</label>
                      <input
                        type="text"
                        name="userName"
                        placeholder="Enter your user name"
                        className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
                        value={formData.userName}
                        onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                      />
                      {errors.userName && <div className="invalid-feedback">{errors.userName}</div>}
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="password">Your Password</label>
                      <div className="input-group">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          placeholder="Enter your password"
                          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        <span className="input-group-text" onClick={handlePasswordVisibility}>
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                      {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>
                    <div className="form-group form-check mb-4">
                      <input
                        type="checkbox"
                        id="checkboxLabel"
                        className="form-check-input"
                      />
                      <label htmlFor="checkboxLabel" className="form-check-label ml-2">
                        Keep me signed in
                      </label>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Link to="/reset-password-phone" className="text-primary font-weight-medium">
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block">
                        Sign in
                      </button>
                    </div>
                  </form>
                  <p className="text-center mt-3">
                    Don’t you have an account?{' '}
                    <Link to="/register" className="text-primary">
                      Sign up
                    </Link>
                  </p>
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

export default Login;

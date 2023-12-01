import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const loginUser = async (userData) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
  
    const raw = JSON.stringify(userData);
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
  
    try {
      const response = await fetch(`${API_BASE_URL}/login-user`, requestOptions);
      const result = await response.text();
      return result;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  export const sendOtp = async (phoneNumber) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
  
    const raw = JSON.stringify({ phoneNumber });
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
  
    try {
      const response = await fetch(`${API_BASE_URL}/send-otp`, requestOptions);
      const result = await response.text();
      return result;
    } catch (error) {
      console.error('Error sending OTP:', error);
      throw error; // Propagate the error for handling in the component
    }
  };

  export const verifyOTP = async (phoneNumber, otp, onSuccess) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const raw = JSON.stringify({
      phoneNumber: phoneNumber,
      otp: otp,
    });
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
  
    try {
      const response = await fetch(`${API_BASE_URL}/verify-otp`, requestOptions);
      const result = await response.text();
  
      return { status: response.status, result: result };
    } catch (error) {
      console.error('Error verifying OTP:', error);
      throw error;
    }
  };

  export const registerUser = async (userData) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const raw = JSON.stringify(userData);
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
  
    try {
      const response = await fetch(`${API_BASE_URL}/register-user`, requestOptions);
      const result = await response.text();
  
      return { status: response.status, result: result };
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  };
import axios from 'axios';

const API_BASE_URL = "https://otplogin-mxpr.onrender.com";

const handleResponse = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response.data;
    } else {
        throw new Error('API Error: ' + response.statusText);
    }
};

export const loginUser = async (username, password) => {
    try {
        const requestOptions = {
            method: 'post',
            url: `${API_BASE_URL}/login-user`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                userName: username,
                password: password,
            },
        };

        const response = await axios(requestOptions);
        return handleResponse(response);
    } catch (error) {
        throw new Error('Error during login.');
    }
};

// Add more API functions as needed



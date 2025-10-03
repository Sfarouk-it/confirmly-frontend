import axios from 'axios';

const API_URL = 'https://confirmly.onrender.com/api/authantification'; // Replace with your backend API URL

export const loginwEmail = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/signup/email`, { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const signupwEmail = async (email: string, username: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/signup/email`, { email, username, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Replace with your backend API URL

export const loginwEmail = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const signupwEmail = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

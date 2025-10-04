import axios from 'axios';

const API_URL = 'https://confirmly.onrender.com/api/authantification'; // Replace with your backend API URL

export const loginwEmail = async (username: string, password: string) => {
    try {
        const response = await axios.post(
            `${API_URL}/login/email`,  
            { username, password },
            {
                withCredentials: true 
            }
        );
        return response.data; 
    } catch (error: any) {
        if (error.response) {
            throw new Error(error.response.data || "Login failed");
        } else {
            throw new Error("Network error");
        }
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

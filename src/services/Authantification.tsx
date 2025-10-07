import axios from 'axios';


export const api = axios.create({
  baseURL: "https://confirmly.onrender.com/api/authantification",
  withCredentials: true,
});

export const loginwEmail = async (username: string, password: string) => {
    try {
        const response = await api.post("/login/email",  { username, password },);
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
        const response = await api.post("/signup/email", { email, username, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

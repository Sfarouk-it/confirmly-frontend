import axios from 'axios';
import { API } from '../APIs/config';

export const authapi = axios.create({
  baseURL: API.AUTHENTIFICATION,
  withCredentials: true,
});

export const loginwEmail = async (username: string, password: string) => {
    try {
        const response = await authapi.post("/login",  { username, password },);
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
        const response = await authapi.post("/signup", { email, username, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const facebookAuth = async () => {
    try {
        const response = await authapi.get("/facebook/authontificate");
        return response.data;
    } catch (error) {
        throw error;
    }
};

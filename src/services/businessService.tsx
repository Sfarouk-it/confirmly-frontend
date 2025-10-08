import axios from 'axios';

export const api = axios.create({
  baseURL: "https://confirmly.onrender.com/api/business",
  withCredentials: true,
});

export const setupBusiness = async (businessName: string, businessType: string, businessField: string) => {
    try {
        const response = await api.post("/setup", { businessName, businessType, businessField });
        return response.data;
    } catch (error) {
        throw error;
    }
};
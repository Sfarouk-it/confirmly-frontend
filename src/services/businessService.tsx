import axios from 'axios';

export const api = axios.create({
  baseURL: "y",
  withCredentials: true,
});

export const setupBusiness = async (brandName: string, businessType: string, businessField: string) => {
    try {
        const response = await api.post("/setup", { 
            businessname: brandName, 
            businesstype: businessType, 
            businessfield: businessField 
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
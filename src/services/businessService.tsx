import axios from 'axios';
import { API } from '../APIs/config';

export const Businessapi = axios.create({
  baseURL: API.BUSINESS,
  withCredentials: true,
});

export const setupBusiness = async (businessName: string, businessType: string, businessField: string) => {
    try {
        const response = await Businessapi.post("/setup", { businessName, businessType, businessField });
        return response.data;
    } catch (error) {
        throw error;
    }
};
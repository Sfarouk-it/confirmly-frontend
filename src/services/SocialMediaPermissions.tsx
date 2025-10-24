import { API } from '../APIs/config';
import axios from 'axios';

export const socialMediaPermissionsApi = axios.create({
  baseURL: API.SOCIALMEDIAPERMISSIONS,
  withCredentials: true,
});

export const getFacebookPermissions = async (buisnessID : string) => {
  try {
    const response = await socialMediaPermissionsApi.post("/pages", { buisnessID });
    return response.data;
  } catch (error) {
    throw error;
  }
};
import { ApiService } from './axios';
import { AuthStorageService } from './authStorageService';

import { ILoginBody } from 'interfaces';

import { toast } from 'react-toastify';

const axiosInstance = new ApiService();
const authStorageService = new AuthStorageService();

export const login = async (body: ILoginBody) => {
  try {
    const data: any = await axiosInstance.post(['users', 'login'], body);
    authStorageService.token = data?.accessToken;
    
    return data;
  } catch (errors: any) {
    toast.error(errors?.errors?.[0]);
    console.log(errors);
  }
};

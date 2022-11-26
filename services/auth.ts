import { ApiService } from './axios';
import { AuthStorageService } from './authStorageService';

import { ILoginBody } from 'interfaces';

import { toast } from 'react-toastify';

const axiosInstance = new ApiService();
const authStorageService = new AuthStorageService();

export const login = async (body: ILoginBody) => {
  try {
    const resp: any = await axiosInstance.post(['login'], body);
    const { data } = resp || {};
    authStorageService.token = data?.accessToken;

    return resp;
  } catch (errors: any) {
    toast.error(errors?.errors?.[0]);
    console.log(errors);
    throw errors;
  }
};

export const logout = () => {
  authStorageService.destroy();
  return {
    isSuccess: true,
  };
};

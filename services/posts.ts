import { ApiService } from './axios';
import { toast } from 'react-toastify';

const axiosInstance = new ApiService();

export const getPosts = async (queryParams?: any) => {
  try {
    const resp: any = await axiosInstance.get(['posts'], queryParams);
    const { data } = resp || {};

    return data;
  } catch (errors: any) {
    toast.error(errors?.errors?.[0]);
    console.log(errors);
  }
};

export const getPostById = async (id: string) => {
  try {
    const resp: any = await axiosInstance.get(['posts', id]);
    const { data } = resp || {};

    return data;
  } catch (errors: any) {
    toast.error(errors?.errors?.[0]);
    console.log(errors);
  }
};

import axiosInstance from './axiosInstance';

export interface User {
  id: string;
  website: string;
  name: string;
  avatar: string;
  description: string;
  createdAt: string;
}

export const getPatientsList = async (): Promise<User[]> => {
  const response = await axiosInstance.get<User[]>('/users');
  return response.data;
};

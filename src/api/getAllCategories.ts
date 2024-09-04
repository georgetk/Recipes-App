import {NETWORK_URL} from '../constants';
import {TCategoriesResponse} from '../types/category';
import {axiosInstance} from './axiosInstance';

export const getAllCategories = async (): Promise<
  TCategoriesResponse | undefined
> => {
  try {
    const result = await axiosInstance.get<TCategoriesResponse>(
      NETWORK_URL.ALL_CATEGORIES_ENDPOINT,
    );

    return result.data;
  } catch (error) {}
};

import {axiosInstance} from '.';
import {NETWORK_URL} from '../constants';
import {TCategoriesResponse} from '../types';

export const getAllCategories = async () => {
  try {
    const result = await axiosInstance.get<TCategoriesResponse>(
      NETWORK_URL.ALL_CATEGORIES_ENDPOINT,
    );

    return result.data;
  } catch (error) {}
};

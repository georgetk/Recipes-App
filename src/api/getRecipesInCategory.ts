import {axiosInstance} from '.';
import {NETWORK_URL} from '../constants';
import {TMealsResponse} from '../types';

export const getRecipesInCategory = async (categoryName: string) => {
  try {
    const result = await axiosInstance.get<TMealsResponse>(
      NETWORK_URL.FILTER_BY_CATEGORIES_ENDPOINT + categoryName,
    );

    return result.data;
  } catch (error) {}
};

import {NETWORK_URL} from '../constants';
import {TMealsResponse} from '../types/recipe';
import {axiosInstance} from './axiosInstance';

export const getRecipesInCategory = async (
  categoryName: string,
): Promise<TMealsResponse | undefined> => {
  try {
    const result = await axiosInstance.get<TMealsResponse>(
      NETWORK_URL.FILTER_BY_CATEGORIES_ENDPOINT + categoryName,
    );

    return result.data;
  } catch (error) {}
};

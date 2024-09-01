import {axiosInstance} from '.';
import {NETWORK_URL} from '../constants';
import {TMealsResponse} from '../types';

export const getTrendingRecipes = async () => {
  try {
    const result = await axiosInstance.get<TMealsResponse>(
      NETWORK_URL.TRENDING_RECIPES_ENDPOINT,
    );

    return result.data;
  } catch (error) {}
};

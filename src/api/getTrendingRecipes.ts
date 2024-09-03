import {NETWORK_URL} from '../constants';
import { TMealsResponse } from '../types/recipe';
import {axiosInstance} from './axiosInstance';

export const getTrendingRecipes = async () => {
  try {
    const result = await axiosInstance.get<TMealsResponse>(
      NETWORK_URL.TRENDING_RECIPES_ENDPOINT,
    );

    return result.data;
  } catch (error) {}
};

import {NETWORK_URL} from '../constants';
import {
  TMealDetailsResponse,
  TMealDetailsResponseWithIngredientsAndMeasuresArray,
} from '../types/recipeDetails';
import {convertIngredientsAndMeasuresToArray} from '../utils/convertIngredientsAndMeasuresToArray';
import {axiosInstance} from './axiosInstance';

export const getRandomRecipe =
  async (): Promise<TMealDetailsResponseWithIngredientsAndMeasuresArray> => {
    try {
      const result = await axiosInstance.get<TMealDetailsResponse>(
        NETWORK_URL.RANDOM_RECIPE,
      );

      const convertedData = convertIngredientsAndMeasuresToArray(result.data);

      return convertedData;
    } catch (error) {}
  };

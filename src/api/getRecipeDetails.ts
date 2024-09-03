import {NETWORK_URL} from '../constants';
import { TMealDetailsResponse, TMealDetailsResponseWithIngredientsAndMeasuresArray } from '../types/recipeDetails';
import {convertIngredientsAndMeasuresToArray} from '../utils/convertIngredientsAndMeasuresToArray';
import {axiosInstance} from './axiosInstance';

export const getRecipeDetails = async (
  mealID: string,
): Promise<TMealDetailsResponseWithIngredientsAndMeasuresArray> => {
  try {
    const result = await axiosInstance.get<TMealDetailsResponse>(
      NETWORK_URL.RECIPE_DETAILS_ENDPOINT + mealID,
    );

    const convertedData = convertIngredientsAndMeasuresToArray(result.data);

    return convertedData;
  } catch (error) {}
};

import {axiosInstance} from '../src/api/axiosInstance';
import {convertIngredientsAndMeasuresToArray} from '../src/utils/convertIngredientsAndMeasuresToArray';
import {NETWORK_URL} from '../src/constants';
import {
  TMealDetailsResponse,
  TMealDetailsResponseWithIngredientsAndMeasuresArray,
} from '../src/types/recipeDetails';
import {getRecipeDetails} from '../src/api';
import {it, jest, describe, expect} from '@jest/globals';

jest.mock('../src/api/axiosInstance');
jest.mock('../src/utils/convertIngredientsAndMeasuresToArray');

describe('getRecipeDetails', () => {
  const mockMealID = '12345';
  const mockAPIResponse: TMealDetailsResponse = {
    meals: [
      {
        idMeal: '12345',
        strMeal: 'Chicken Curry',
        strArea: 'Indian',
        strMealThumb:
          'https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg',
        strYoutube: 'https://www.youtube.com/watch?v=example',
        strIngredient1: 'Chicken',
        strIngredient2: 'Curry Powder',
        strMeasure1: '500g',
        strMeasure2: '2 tbsp',
      },
    ],
  };

  const mockConvertedResponse: TMealDetailsResponseWithIngredientsAndMeasuresArray =
    {
      meals: [
        {
          idMeal: '12345',
          strMeal: 'Chicken Curry',
          strArea: 'Indian',
          strMealThumb:
            'https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg',
          strYoutube: 'https://www.youtube.com/watch?v=example',
          ingredientsAndMeasures: [
            {ingredient: 'Chicken', measure: '500g'},
            {ingredient: 'Curry Powder', measure: '2 tbsp'},
          ],
        },
      ],
    };

  it('should return converted data when the API call is successful', async () => {
    (axiosInstance.get as jest.Mock).mockResolvedValue({data: mockAPIResponse});
    (convertIngredientsAndMeasuresToArray as jest.Mock).mockReturnValue(
      mockConvertedResponse,
    );

    const result = await getRecipeDetails(mockMealID);

    expect(axiosInstance.get).toHaveBeenCalledWith(
      `${NETWORK_URL.RECIPE_DETAILS_ENDPOINT}${mockMealID}`,
    );
    expect(convertIngredientsAndMeasuresToArray).toHaveBeenCalledWith(
      mockAPIResponse,
    );
    expect(result).toEqual(mockConvertedResponse);
  });

  it('should return undefined when the API call fails', async () => {
    (axiosInstance.get as jest.Mock).mockRejectedValue(new Error('API Error'));

    const result = await getRecipeDetails(mockMealID);

    expect(axiosInstance.get).toHaveBeenCalledWith(
      `${NETWORK_URL.RECIPE_DETAILS_ENDPOINT}${mockMealID}`,
    );
    expect(result).toBeUndefined();
  });
});

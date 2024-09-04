import {getAllCategories} from '../src/api';
import {axiosInstance} from '../src/api/axiosInstance';
import {NETWORK_URL} from '../src/constants';
import {TCategoriesResponse} from '../src/types/category';
import {it, jest, describe, expect} from '@jest/globals';

jest.mock('../src/api/axiosInstance');

describe('getAllCategories', () => {
  const mockCategoriesResponse: TCategoriesResponse = {
    categories: [
      {
        idCategory: '1',
        strCategory: 'Beef',
        strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
        strCategoryDescription:
          'Beef is the culinary name for meat from cattle.',
      },
      {
        idCategory: '2',
        strCategory: 'Chicken',
        strCategoryThumb:
          'https://www.themealdb.com/images/category/chicken.png',
        strCategoryDescription:
          'Chicken is a type of domesticated bird. It is one of the most common and widespread domestic animals.',
      },
    ],
  };

  it('should return data when the API call is successful', async () => {
    (axiosInstance.get as jest.Mock).mockResolvedValue({
      data: mockCategoriesResponse,
    });

    const result = await getAllCategories();

    expect(axiosInstance.get).toHaveBeenCalledWith(
      NETWORK_URL.ALL_CATEGORIES_ENDPOINT,
    );
    expect(result).toEqual(mockCategoriesResponse);
  });

  it('should return undefined when the API call fails', async () => {
    (axiosInstance.get as jest.Mock).mockRejectedValue(new Error('API Error'));

    const result = await getAllCategories();

    expect(axiosInstance.get).toHaveBeenCalledWith(
      NETWORK_URL.ALL_CATEGORIES_ENDPOINT,
    );
    expect(result).toBeUndefined();
  });
});

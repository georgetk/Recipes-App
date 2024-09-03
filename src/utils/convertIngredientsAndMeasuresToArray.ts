import {INGREDIENT_KEYS, MEASURE_KEYS} from '../constants';
import {
  TIngredientsAndMeasureObject,
  TMealDetailsResponse,
  TMealDetailsResponseWithIngredientsAndMeasuresArray,
} from '../types/recipeDetails';

export const convertIngredientsAndMeasuresToArray = ({
  meals,
}: TMealDetailsResponse): TMealDetailsResponseWithIngredientsAndMeasuresArray => {
  const ingredientsAndMeasures: TIngredientsAndMeasureObject[] = [];

  type TIngredientKey = keyof typeof INGREDIENT_KEYS;

  let ingredientEnumKey: TIngredientKey;

  const mealObject = meals?.[0];

  for (ingredientEnumKey in INGREDIENT_KEYS) {
    const ingredientObjectkey = INGREDIENT_KEYS[ingredientEnumKey];
    const measureObjectKey = MEASURE_KEYS[ingredientEnumKey];

    const ingredient = mealObject?.[ingredientObjectkey];

    const measure = mealObject?.[measureObjectKey];

    if (ingredient && measure) {
      ingredientsAndMeasures.push({
        ingredient: ingredient,
        measure: measure,
      });
    }
  }

  return {
    meals: [
      {
        idMeal: mealObject?.idMeal,
        strMeal: mealObject?.strMeal,
        strArea: mealObject?.strArea,
        strMealThumb: mealObject?.strMealThumb,
        strYoutube: mealObject?.strYoutube,
        ingredientsAndMeasures,
      },
    ],
  };
};

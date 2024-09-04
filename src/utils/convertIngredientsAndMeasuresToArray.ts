import {INGREDIENT_KEYS, MEASURE_KEYS} from '../constants';
import {
  TIngredientsAndMeasureObject,
  TMealDetailsResponse,
  TMealDetailsResponseWithIngredientsAndMeasuresArray,
} from '../types/recipeDetails';

// Convert ingredients and measures object to array
// such that it can be iterated as key value pairs
export const convertIngredientsAndMeasuresToArray = ({
  meals,
}: TMealDetailsResponse): TMealDetailsResponseWithIngredientsAndMeasuresArray => {
  const ingredientsAndMeasures: TIngredientsAndMeasureObject[] = [];

  type TIngredientKey = keyof typeof INGREDIENT_KEYS;

  let ingredientEnumKey: TIngredientKey;

  const mealObject = meals?.[0];

  for (ingredientEnumKey in INGREDIENT_KEYS) {
    // The key below would be `strIngredient${count}`
    const ingredientObjectkey = INGREDIENT_KEYS[ingredientEnumKey];

    // Since the key name fields in both INGREDIENT_KEYS and MEASURE_KEYS enums are same,
    // we can use the ingredientEnumKey for iterating over MEASURE_KEYS enum
    // The key below would be `strMeasure${count}`
    const measureObjectKey = MEASURE_KEYS[ingredientEnumKey];

    // Getting the ingredient value for the key `strIngredient${count}`
    const ingredient = mealObject?.[ingredientObjectkey];

    // Getting the measure value for the key `strMeasure${count}`
    const measure = mealObject?.[measureObjectKey];

    if (ingredient && measure) {
      // If not null, pushing it as key value pairs
      ingredientsAndMeasures.push({
        ingredient: ingredient,
        measure: measure,
      });
    }
  }

  // Returning only needed data
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

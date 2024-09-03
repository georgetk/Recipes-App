import {INGREDIENT_KEYS, MEASURE_KEYS} from '../constants';

export type TMealDetailsBase = {
  idMeal?: string;
  strMeal?: string;
  strArea?: string;
  strMealThumb?: string;
  strYoutube?: string;
};

export type TMealDetailsIngredients = {
  [key in INGREDIENT_KEYS]?: string | null;
};

export type TMealDetailsMeasures = {
  [key in MEASURE_KEYS]?: string | null;
};

export type TMealDetailsObject = TMealDetailsBase &
  TMealDetailsIngredients &
  TMealDetailsMeasures;

export type TMealDetailsResponse = {
  meals?: TMealDetailsObject[];
};

export type TIngredientsAndMeasureObject = {
  ingredient: string | null;
  measure: string | null;
};

export type TIngredientsAndMeasureArray = {
  ingredientsAndMeasures: TIngredientsAndMeasureObject[];
};

export type TMealDetailsResponseWithIngredientsAndMeasures =
  | (TMealDetailsBase & TIngredientsAndMeasureArray)
  | undefined;

export type TMealDetailsResponseWithIngredientsAndMeasuresArray =
  | {
      meals?: TMealDetailsResponseWithIngredientsAndMeasures[];
    }
  | undefined;

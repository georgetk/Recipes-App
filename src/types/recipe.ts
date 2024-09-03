export type TMeal = {
  strMeal?: string | undefined;
  strMealThumb?: string | undefined;
  idMeal?: string | undefined;
};

export type TMealsResponse = {
  meals?: TMeal[];
};

export type TMeal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

export type TMealsResponse = {
  meals: TMeal[];
};

export type TCategory = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export type TCategoriesResponse = {
  categories: TCategory[];
};

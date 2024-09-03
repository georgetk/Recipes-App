export type TCategory = {
  idCategory?: string;
  strCategory?: string;
  strCategoryThumb?: string;
  strCategoryDescription?: string;
};

export type TCategoriesResponse = {
  categories: TCategory[];
};

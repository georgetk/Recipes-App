import {useCallback} from 'react';
import {TMeal} from '../types';
import {useSavedRecipesStore} from '../store';
import {APP_COLORS} from '../constants';

type TUseSavedItemReturn = {
  getColor: (recipeItem: TMeal) => string;
  handleSavePress: (recipeItem: TMeal) => void;
  savedRecipes: TMeal[];
};

export const useSavedItem = (): TUseSavedItemReturn => {
  const {savedRecipes, addSavedRecipes, removeSavedRecipes} =
    useSavedRecipesStore();

  const getColor = useCallback(
    (recipeItem: TMeal) =>
      savedRecipes.some(item => item.idMeal === recipeItem.idMeal)
        ? APP_COLORS.PRIMARY_COLOR
        : APP_COLORS.BLACK,
    [savedRecipes],
  );

  const handleSavePress = useCallback(
    (recipeItem: TMeal) => {
      if (savedRecipes.some(item => item.idMeal === recipeItem.idMeal)) {
        removeSavedRecipes(recipeItem);
      } else {
        addSavedRecipes(recipeItem);
      }
    },
    [savedRecipes, addSavedRecipes, removeSavedRecipes],
  );

  return {getColor, handleSavePress, savedRecipes};
};

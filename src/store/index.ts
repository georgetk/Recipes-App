import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TMeal} from '../types';

type TSavedRecipes = {
  savedRecipes: TMeal[];
  addSavedRecipes: (recipeItem: TMeal) => void;
  removeSavedRecipes: (recipeItem: TMeal) => void;
};

export const useSavedRecipesStore = create<TSavedRecipes>()(
  persist(
    set => ({
      savedRecipes: [],
      addSavedRecipes: recipeItem =>
        set(state => ({savedRecipes: [...state.savedRecipes, recipeItem]})),
      removeSavedRecipes: recipeItem =>
        set(state => ({
          savedRecipes: [
            ...state.savedRecipes.filter(
              item => item.idMeal !== recipeItem.idMeal,
            ),
          ],
        })),
    }),
    {
      name: 'saved-recipes',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

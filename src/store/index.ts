import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type TSavedRecipes = {
  savedRecipes: number[];
  addSavedRecipes: (recipeID: number) => void;
  removeSavedRecipes: (recipeID: number) => void;
};

export const useSavedRecipesStore = create<TSavedRecipes>()(
  persist(
    set => ({
      savedRecipes: [],
      addSavedRecipes: recipeID =>
        set(state => ({savedRecipes: [...state.savedRecipes, recipeID]})),
      removeSavedRecipes: recipeID =>
        set(state => ({
          savedRecipes: [
            ...state.savedRecipes.filter(item => item !== recipeID),
          ],
        })),
    }),
    {
      name: 'saved-recipes',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

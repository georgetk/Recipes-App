import {useCallback} from 'react';
import {TMeal} from '../types/recipe';

export const useKeyExtractorForRecipe = (): ((
  item: TMeal,
  index: number,
) => string) => {
  const keyExtractor = useCallback(
    (item: TMeal, index: number) => item?.idMeal?.toString() || `${index}`,
    [],
  );

  return keyExtractor;
};

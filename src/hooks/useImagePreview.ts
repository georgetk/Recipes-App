import {useCallback} from 'react';

export const useImagePreview = () => {
  const getPreviewURL = useCallback(
    (strMealThumb: string) => `${strMealThumb}/preview`,
    [],
  );

  return getPreviewURL;
};

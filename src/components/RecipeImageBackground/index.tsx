import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {SaveButton} from '../SaveItem';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';
import {useImagePreview} from '../../hooks';
import {TMeal} from '../../types/recipe';
import {TMealDetailsObject} from '../../types/recipeDetails';

type TRecipeImageBackground = {
  isPreview?: boolean;
  showSaveButton?: boolean;
  item: TMeal | TMealDetailsObject;
};

export const RecipeImageBackground: React.FC<TRecipeImageBackground> = ({
  isPreview = true,
  showSaveButton = true,
  item,
}) => {
  const getPreviewURL = useImagePreview();

  return (
    <>
      {item?.strMealThumb ? (
        <ImageBackground
          source={{
            uri: isPreview
              ? getPreviewURL(item?.strMealThumb)
              : item?.strMealThumb,
          }}
          style={styles.imageItem}
          imageStyle={styles.imageStyle}>
          {showSaveButton ? (
            <SaveButton item={item} styling={styles.recipeSaveContainer} />
          ) : null}
        </ImageBackground>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  imageItem: {
    width: '100%',
    height: getNormalizedVerticalSizeWithPlatformOffset(180),
  },
  imageStyle: {
    borderRadius: getNormalizedSizeWithPlatformOffset(10),
  },
  recipeSaveContainer: {
    top: getNormalizedSizeWithPlatformOffset(10),
    right: getNormalizedSizeWithPlatformOffset(10),
    alignSelf: 'flex-end',
  },
});

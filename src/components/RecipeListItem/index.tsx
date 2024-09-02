import React, {memo} from 'react';
import {ImageBackground, StyleSheet, View, ViewStyle} from 'react-native';
import {SaveButton} from '../SaveItem';
import Subtitle from '../Subtitle';
import {TMeal} from '../../types';
import {useImagePreview} from '../../hooks/useImagePreview';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';

type TRecipeListItem = {
  item: TMeal;
  styling?: ViewStyle;
};

const RecipeListItem: React.FC<TRecipeListItem> = ({item, styling}) => {
  const getPreviewURL = useImagePreview();

  return (
    <View style={[styles.trendingItemContainer, styling]}>
      <ImageBackground
        source={{uri: getPreviewURL(item?.strMealThumb)}}
        style={styles.trendingImageItem}
        imageStyle={styles.trendingImageStyle}>
        <SaveButton item={item} styling={styles.trendingRecipeSaveContainer} />
      </ImageBackground>
      <Subtitle text={item.strMeal} styling={styles.trendingItemText} />
    </View>
  );
};

const styles = StyleSheet.create({
  trendingItemContainer: {
    borderRadius: getNormalizedSizeWithPlatformOffset(10),
    width: getNormalizedSizeWithPlatformOffset(280),
  },
  trendingImageItem: {
    width: '100%',
    height: getNormalizedVerticalSizeWithPlatformOffset(180),
  },
  trendingImageStyle: {
    borderRadius: getNormalizedSizeWithPlatformOffset(10),
  },
  trendingItemText: {
    marginTop: getNormalizedVerticalSizeWithPlatformOffset(20),
  },
  trendingRecipeSaveContainer: {
    top: getNormalizedSizeWithPlatformOffset(10),
    right: getNormalizedSizeWithPlatformOffset(10),
    alignSelf: 'flex-end',
  },
});

const MemoizedRecipeListItem = memo(RecipeListItem);

export default MemoizedRecipeListItem;

import React, {memo} from 'react';
import {Pressable, StyleSheet, ViewStyle} from 'react-native';
import Subtitle from '../Subtitle';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';
import {RecipeImageBackground} from '../RecipeImageBackground';
import {TMeal} from '../../types/recipe';

type TRecipeListItem = {
  item: TMeal;
  styling?: ViewStyle;
  onPress: () => void;
  isPreview?: boolean;
  showSaveButton?: boolean;
};

const RecipeListItem: React.FC<TRecipeListItem> = ({
  item,
  onPress,
  styling,
}) => (
  <Pressable onPress={onPress} style={[styles.itemContainer, styling]}>
    <RecipeImageBackground item={item} />
    <Subtitle text={item?.strMeal ?? ''} styling={styles.itemText} />
  </Pressable>
);

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: getNormalizedSizeWithPlatformOffset(10),
    width: getNormalizedSizeWithPlatformOffset(280),
  },
  itemText: {
    marginTop: getNormalizedVerticalSizeWithPlatformOffset(20),
  },
});

const MemoizedRecipeListItem = memo(RecipeListItem);

export default MemoizedRecipeListItem;

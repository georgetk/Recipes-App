import React, {memo} from 'react';
import {Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import Subtitle from '../Subtitle';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';
import {RecipeImageBackground} from '../RecipeImageBackground';
import {TMeal} from '../../types/recipe';
import {APP_COLORS, APP_TEXTS} from '../../constants';
import Caption from '../Caption';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
    <View style={styles.authorContainer}>
      <MaterialCommunityIcons
        name="account-outline"
        size={30}
        color={APP_COLORS.NEUTRAL}
      />
      <Caption
        text={APP_TEXTS.RECIPE_AUTHOR_NAME}
        styling={styles.authorText}
      />
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: getNormalizedSizeWithPlatformOffset(10),
    width: getNormalizedSizeWithPlatformOffset(280),
  },
  itemText: {
    marginTop: getNormalizedVerticalSizeWithPlatformOffset(10),
  },
  authorText: {
    color: APP_COLORS.GREY,
    marginLeft: getNormalizedVerticalSizeWithPlatformOffset(10),
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: getNormalizedVerticalSizeWithPlatformOffset(5),
    height: getNormalizedVerticalSizeWithPlatformOffset(32),
  },
});

const MemoizedRecipeListItem = memo(RecipeListItem);

export default MemoizedRecipeListItem;

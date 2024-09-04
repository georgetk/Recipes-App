import React, {useCallback} from 'react';
import {REACT_QUERY_KEYS} from '../../constants';
import {View} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {
  HorizontalSeparator,
  ListEmptyComponent,
  MemoizedPopularRecipeItem,
} from '../../components';
import {getRecipesInCategory} from '../../api';
import {useNavigateToRecipeDetails} from '../../hooks';
import {FlashList} from '@shopify/flash-list';
import {getNormalizedVerticalSizeWithPlatformOffset} from '../../utils/scaling';
import {styles} from './styles';
import {TMeal} from '../../types/recipe';

type TPopularCategoryRecipeList = {
  selectedCategory: string | undefined;
};

export const PopularCategoryRecipeList: React.FC<
  TPopularCategoryRecipeList
> = ({selectedCategory}) => {
  const handleNavigation = useNavigateToRecipeDetails();

  const query = useQuery({
    queryKey: [REACT_QUERY_KEYS.RECIPES_IN_CATEGORY, selectedCategory],
    queryFn: () => getRecipesInCategory(selectedCategory ?? ''),
    enabled: !!selectedCategory, // Only run query if selectedCategory is truthy
  });

  const keyExtractor = useCallback(
    (item: TMeal, index: number) => item?.idMeal?.toString() || `${index}`,
    [],
  );

  return (
    <View style={styles.recipeItemsFlashlistContainer}>
      <FlashList
        estimatedItemSize={getNormalizedVerticalSizeWithPlatformOffset(150)}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={query.data?.meals}
        contentContainerStyle={styles.flashListContentStyle}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={HorizontalSeparator}
        ListEmptyComponent={ListEmptyComponent}
        renderItem={({item}) => (
          <MemoizedPopularRecipeItem
            item={item}
            onPress={() => handleNavigation(item.idMeal ?? '')}
          />
        )}
      />
    </View>
  );
};

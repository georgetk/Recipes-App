import {useQuery} from '@tanstack/react-query';
import React, {useCallback} from 'react';
import {REACT_QUERY_KEYS} from '../../constants';
import {FlatList, ListRenderItem, View} from 'react-native';
import {styles} from './styles';
import {HorizontalSeparator, SaveButton, Subtitle} from '../../components';
import {TMeal} from '../../types';
import {getRecipesInCategory} from '../../api/getRecipesInCategory';

type TPopularCategoryRecipeList = {
  selectedCategory: string;
};

export const PopularCategoryRecipeList: React.FC<
  TPopularCategoryRecipeList
> = ({selectedCategory}) => {
  const query = useQuery({
    queryKey: [REACT_QUERY_KEYS.RECIPES_IN_CATEGORY, selectedCategory],
    queryFn: () => getRecipesInCategory(selectedCategory),
    enabled: !!selectedCategory, // Only run query if selectedCategory is truthy
  });

  const renderItem: ListRenderItem<TMeal> = useCallback(
    ({item}) => (
      <View style={styles.trendingItemContainer}>
        <SaveButton item={item} />
        <Subtitle text={item.strMeal} styling={styles.trendingItemText} />
      </View>
    ),
    [],
  );

  return (
    <>
      <FlatList
        style={styles.flatListStyle}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={query.data?.meals}
        contentContainerStyle={styles.flatListContentStyle}
        keyExtractor={item => item.idMeal}
        ItemSeparatorComponent={HorizontalSeparator}
        renderItem={renderItem}
      />
    </>
  );
};

import React from 'react';
import {REACT_QUERY_KEYS} from '../../constants';
import {FlatList} from 'react-native';
import {useQuery} from '@tanstack/react-query';

import {
  HorizontalSeparator,
  ListEmptyComponent,
  MemoizedPopularRecipeItem,
} from '../../components';
import {styles} from './styles';
import {getRecipesInCategory} from '../../api';
import {useNavigateToRecipeDetails} from '../../hooks';

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

  return (
    <>
      <FlatList
        style={styles.flatListStyle}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={query.data?.meals}
        contentContainerStyle={styles.flatListContentStyle}
        keyExtractor={(item, index) => item?.idMeal?.toString() || `${index}`}
        ItemSeparatorComponent={HorizontalSeparator}
        ListEmptyComponent={ListEmptyComponent}
        renderItem={({item}) => (
          <MemoizedPopularRecipeItem
            item={item}
            onPress={() => handleNavigation(item.idMeal ?? '')}
          />
        )}
      />
    </>
  );
};

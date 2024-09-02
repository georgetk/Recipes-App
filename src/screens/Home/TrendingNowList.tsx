import React from 'react';
import {FlatList} from 'react-native';
import {styles} from './styles';
import {
  HorizontalSeparator,
  ListEmptyComponent,
  MemoizedRecipeListItem,
} from '../../components';
import {getTrendingRecipes} from '../../api/getTrendingRecipes';
import {REACT_QUERY_KEYS} from '../../constants';
import {useQuery} from '@tanstack/react-query';

export const TrendingNowList: React.FC = () => {
  const query = useQuery({
    queryKey: [REACT_QUERY_KEYS.TRENDING_RECIPES],
    queryFn: getTrendingRecipes,
  });

  return (
    <FlatList
      style={styles.flatListStyle}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={query.data?.meals}
      contentContainerStyle={styles.flatListContentStyle}
      keyExtractor={item => item.idMeal}
      ItemSeparatorComponent={HorizontalSeparator}
      ListEmptyComponent={ListEmptyComponent}
      renderItem={({item}) => <MemoizedRecipeListItem item={item} />}
    />
  );
};

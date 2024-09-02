import React, {useCallback} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {styles} from './styles';
import {
  HorizontalSeparator,
  ListEmptyComponent,
  MemoizedRecipeListItem,
} from '../../components';
import {getTrendingRecipes} from '../../api/getTrendingRecipes';
import {REACT_QUERY_KEYS} from '../../constants';
import {useQuery} from '@tanstack/react-query';
import {TMeal} from '../../types';

export const TrendingNowList: React.FC = () => {
  const query = useQuery({
    queryKey: [REACT_QUERY_KEYS.TRENDING_RECIPES],
    queryFn: getTrendingRecipes,
  });

  const renderItem: ListRenderItem<TMeal> = useCallback(
    ({item}) => <MemoizedRecipeListItem item={item} />,
    [],
  );

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
      renderItem={renderItem}
    />
  );
};

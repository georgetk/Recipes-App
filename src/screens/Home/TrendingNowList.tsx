import React from 'react';
import {FlatList} from 'react-native';
import {styles} from './styles';
import {
  HorizontalSeparator,
  ListEmptyComponent,
  MemoizedRecipeListItem,
} from '../../components';
import {REACT_QUERY_KEYS} from '../../constants';
import {useQuery} from '@tanstack/react-query';
import {getTrendingRecipes} from '../../api';
import { useNavigateToRecipeDetails } from '../../hooks';

export const TrendingNowList: React.FC = ({}) => {
  const handleNavigation = useNavigateToRecipeDetails();

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
      keyExtractor={(item, index) => item?.idMeal?.toString() || `${index}`}
      ItemSeparatorComponent={HorizontalSeparator}
      ListEmptyComponent={ListEmptyComponent}
      renderItem={({item}) => (
        <MemoizedRecipeListItem
          item={item}
          onPress={() => handleNavigation(item.idMeal ?? '')}
        />
      )}
    />
  );
};

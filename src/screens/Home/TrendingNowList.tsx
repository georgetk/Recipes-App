import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {styles} from './styles';
import {HorizontalSeparator, SaveButton, Subtitle} from '../../components';
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
    ({item}) => (
      <View style={styles.trendingItemContainer}>
        <SaveButton item={item} />

        <Subtitle text={item.strMeal} styling={styles.trendingItemText} />
      </View>
    ),
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
      renderItem={renderItem}
    />
  );
};

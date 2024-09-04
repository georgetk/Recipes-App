import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {
  HorizontalSeparator,
  ListEmptyComponent,
  MemoizedRecipeListItem,
} from '../../components';
import {REACT_QUERY_KEYS} from '../../constants';
import {useQuery} from '@tanstack/react-query';
import {getTrendingRecipes} from '../../api';
import {useNavigateToRecipeDetails} from '../../hooks';
import {FlashList} from '@shopify/flash-list';
import {getNormalizedSizeWithPlatformOffset} from '../../utils/scaling';

export const TrendingNowList: React.FC = ({}) => {
  const handleNavigation = useNavigateToRecipeDetails();

  const query = useQuery({
    queryKey: [REACT_QUERY_KEYS.TRENDING_RECIPES],
    queryFn: getTrendingRecipes,
  });

  return (
    <View style={styles.trendingRecipesFlashlistContainer}>
      <FlashList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={query.data?.meals}
        estimatedItemSize={getNormalizedSizeWithPlatformOffset(280)}
        contentContainerStyle={styles.flashListContentStyle}
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
    </View>
  );
};

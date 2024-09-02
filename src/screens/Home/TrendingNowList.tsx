import React, {useCallback} from 'react';
import {FlatList, ImageBackground, ListRenderItem, View} from 'react-native';
import {styles} from './styles';
import {
  HorizontalSeparator,
  ListEmptyComponent,
  SaveButton,
  Subtitle,
} from '../../components';
import {getTrendingRecipes} from '../../api/getTrendingRecipes';
import {REACT_QUERY_KEYS} from '../../constants';
import {useQuery} from '@tanstack/react-query';
import {TMeal} from '../../types';
import {useImagePreview} from '../../hooks/useImagePreview';

export const TrendingNowList: React.FC = () => {
  const query = useQuery({
    queryKey: [REACT_QUERY_KEYS.TRENDING_RECIPES],
    queryFn: getTrendingRecipes,
  });

  const getPreviewURL = useImagePreview();

  const renderItem: ListRenderItem<TMeal> = useCallback(
    ({item}) => (
      <View style={styles.trendingItemContainer}>
        <ImageBackground
          resizeMode="cover"
          source={{uri: getPreviewURL(item?.strMealThumb)}}
          style={styles.trendingImageItem}
          imageStyle={styles.trendingImageStyle}>
          <SaveButton
            item={item}
            styling={styles.trendingRecipeSaveContainer}
          />
        </ImageBackground>
        <Subtitle text={item.strMeal} styling={styles.trendingItemText} />
      </View>
    ),
    [getPreviewURL],
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

import React, {useCallback} from 'react';
import {
  FlatList,
  ImageBackground,
  ListRenderItem,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {HorizontalSeparator, Subtitle} from '../../components';
import {getTrendingRecipes} from '../../api/getTrendingRecipes';
import Icon from 'react-native-vector-icons/Octicons';
import {APP_COLORS, REACT_QUERY_KEYS} from '../../constants';
import {useQuery} from '@tanstack/react-query';
import {useSavedRecipesStore} from '../../store';
import {TMeal} from '../../types';

export const TrendingNowList: React.FC = () => {
  const query = useQuery({
    queryKey: [REACT_QUERY_KEYS.TRENDING_RECIPES],
    queryFn: getTrendingRecipes,
  });

  const {savedRecipes, addSavedRecipes, removeSavedRecipes} =
    useSavedRecipesStore();

  const getColor = useCallback(
    (idMeal: string) =>
      savedRecipes.includes(Number(idMeal))
        ? APP_COLORS.PRIMARY_COLOR
        : APP_COLORS.BLACK,
    [savedRecipes],
  );

  const handleSavePress = useCallback(
    (idMeal: string) => {
      const idMealNumber = Number(idMeal);
      if (savedRecipes.includes(idMealNumber)) {
        removeSavedRecipes(idMealNumber);
      } else {
        addSavedRecipes(idMealNumber);
      }
    },
    [savedRecipes, addSavedRecipes, removeSavedRecipes],
  );

  const renderItem: ListRenderItem<TMeal> = useCallback(
    ({item}) => (
      <View style={styles.trendingItemContainer}>
        <ImageBackground
          source={{uri: `${item?.strMealThumb}/preview`}}
          style={styles.trendingImageItem}
          imageStyle={styles.trendingImageStyle}>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => handleSavePress(item.idMeal)}>
            <Icon name="bookmark" color={getColor(item.idMeal)} size={23} />
          </TouchableOpacity>
        </ImageBackground>
        <Subtitle text={item.strMeal} styling={styles.trendingItemText} />
      </View>
    ),
    [getColor, handleSavePress],
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

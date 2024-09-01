import {useQuery} from '@tanstack/react-query';
import React, {useCallback, useEffect, useState} from 'react';
import {APP_COLORS, REACT_QUERY_KEYS} from '../../constants';
import {getAllCategories} from '../../api/getAllCategories';
import {
  FlatList,
  ImageBackground,
  ListRenderItem,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {
  HorizontalSeparator,
  PrimaryButton,
  Subtitle,
  TextButton,
} from '../../components';
import {TCategory, TMeal} from '../../types';
import {getRecipesInCategory} from '../../api/getRecipesInCategory';
import {useSavedRecipesStore} from '../../store';
import Icon from 'react-native-vector-icons/Octicons';

export const PopularCategoryList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const allCategoriesQuery = useQuery({
    queryKey: [REACT_QUERY_KEYS.ALL_CATEGORIES],
    queryFn: getAllCategories,
  });

  const recipesInCategoriesQuery = useQuery({
    queryKey: [REACT_QUERY_KEYS.RECIPES_IN_CATEGORY, selectedCategory],
    queryFn: () => getRecipesInCategory(selectedCategory),
    enabled: !!selectedCategory, // Only run query if selectedCategory is truthy
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

  useEffect(() => {
    if (
      allCategoriesQuery.data &&
      allCategoriesQuery.data?.categories?.length > 0
    ) {
      setSelectedCategory(allCategoriesQuery.data.categories[0].strCategory);
    }
  }, [allCategoriesQuery.data]);

  const renderCategoryItem: ListRenderItem<TCategory> = useCallback(
    ({item}) => (
      <TouchableOpacity onPress={() => setSelectedCategory(item?.strCategory)}>
        {item?.strCategory === selectedCategory ? (
          <PrimaryButton text={item?.strCategory} />
        ) : (
          <TextButton text={item?.strCategory} />
        )}
      </TouchableOpacity>
    ),
    [selectedCategory],
  );

  const renderRecipeItem: ListRenderItem<TMeal> = useCallback(
    ({item}) => (
      <View style={styles.trendingItemContainer}>
        <ImageBackground
          resizeMode="cover"
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
    <>
      <FlatList
        style={styles.flatListStyle}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={allCategoriesQuery.data?.categories}
        contentContainerStyle={styles.flatListContentStyle}
        keyExtractor={item => item.idCategory}
        ItemSeparatorComponent={HorizontalSeparator}
        renderItem={renderCategoryItem}
      />

      <FlatList
        style={styles.flatListStyle}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={recipesInCategoriesQuery.data?.meals}
        contentContainerStyle={styles.flatListContentStyle}
        keyExtractor={item => item.idMeal}
        ItemSeparatorComponent={HorizontalSeparator}
        renderItem={renderRecipeItem}
      />
    </>
  );
};

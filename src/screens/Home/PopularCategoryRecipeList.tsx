import {useQuery} from '@tanstack/react-query';
import React, {useCallback} from 'react';
import {APP_TEXTS, REACT_QUERY_KEYS} from '../../constants';
import {FlatList, Image, ListRenderItem, View} from 'react-native';
import {
  BodyText,
  Caption,
  HorizontalSeparator,
  ListEmptyComponent,
  SaveButton,
} from '../../components';
import {TMeal} from '../../types';
import {getRecipesInCategory} from '../../api/getRecipesInCategory';
import {styles} from './styles';
import {useImagePreview} from '../../hooks/useImagePreview';

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

  const getPreviewURL = useImagePreview();

  const renderItem: ListRenderItem<TMeal> = useCallback(
    ({item}) => (
      <View style={styles.popularRecipeContainer}>
        <View style={styles.bottomView}>
          <View style={styles.popularRecipeImageContainer}>
            <Image
              style={styles.popularRecipeImage}
              source={{uri: getPreviewURL(item?.strMealThumb)}}
            />
          </View>
          <View style={styles.bottomBodyContainer}>
            <BodyText text={item.strMeal} styling={styles.popularRecipeTitle} />
            <View style={styles.bottomBodyView}>
              <Caption text={APP_TEXTS.TIME} styling={styles.bottomTimeLabel} />

              <View style={styles.bottomTimeAndButtonContainer}>
                <Caption
                  text={APP_TEXTS.STATIC_TIME}
                  styling={styles.bottomTimeValueText}
                />
                <SaveButton item={item} />
              </View>
            </View>
          </View>
        </View>
      </View>
    ),
    [getPreviewURL],
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
        ListEmptyComponent={ListEmptyComponent}
        renderItem={renderItem}
      />
    </>
  );
};

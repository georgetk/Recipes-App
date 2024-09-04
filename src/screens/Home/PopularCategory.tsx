import {useQuery} from '@tanstack/react-query';
import React, {useCallback, useEffect, useState} from 'react';
import {REACT_QUERY_KEYS} from '../../constants';
import {View} from 'react-native';
import {styles} from './styles';
import {HorizontalSeparator, MemoizedCategoryButton} from '../../components';
import {PopularCategoryRecipeList} from './PopularCategoryRecipeList';
import {getAllCategories} from '../../api';
import {FlashList} from '@shopify/flash-list';
import {getNormalizedSizeWithPlatformOffset} from '../../utils/scaling';
import {TCategory} from '../../types/category';

export const PopularCategory: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();

  const query = useQuery({
    queryKey: [REACT_QUERY_KEYS.ALL_CATEGORIES],
    queryFn: getAllCategories,
  });

  useEffect(() => {
    if (query.data && query.data?.categories?.length > 0) {
      setSelectedCategory(query.data.categories[0].strCategory);
    }
  }, [query.data]);

  const keyExtractor = useCallback(
    (item: TCategory, index: number): string =>
      item?.idCategory?.toString() || `${index}`,
    [],
  );

  return (
    <>
      <View style={styles.categoryFlashlistContainer}>
        <FlashList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={query.data?.categories}
          extraData={selectedCategory}
          contentContainerStyle={styles.flashListContentStyle}
          estimatedItemSize={getNormalizedSizeWithPlatformOffset(83)}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={HorizontalSeparator}
          renderItem={({item}) => (
            <MemoizedCategoryButton
              item={item}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          )}
        />
      </View>

      <PopularCategoryRecipeList selectedCategory={selectedCategory} />
    </>
  );
};

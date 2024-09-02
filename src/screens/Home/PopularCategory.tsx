import {useQuery} from '@tanstack/react-query';
import React, {useCallback, useEffect, useState} from 'react';
import {REACT_QUERY_KEYS} from '../../constants';
import {getAllCategories} from '../../api/getAllCategories';
import {FlatList, ListRenderItem, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {HorizontalSeparator, PrimaryButton, TextButton} from '../../components';
import {TCategory} from '../../types';
import {PopularCategoryRecipeList} from './PopularCategoryRecipeList';

export const PopularCategory: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const query = useQuery({
    queryKey: [REACT_QUERY_KEYS.ALL_CATEGORIES],
    queryFn: getAllCategories,
  });

  useEffect(() => {
    if (query.data && query.data?.categories?.length > 0) {
      setSelectedCategory(query.data.categories[0].strCategory);
    }
  }, [query.data]);

  const renderItem: ListRenderItem<TCategory> = useCallback(
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

  return (
    <>
      <FlatList
        style={styles.flatListStyle}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={query.data?.categories}
        contentContainerStyle={styles.flatListContentStyle}
        keyExtractor={item => item.idCategory}
        ItemSeparatorComponent={HorizontalSeparator}
        renderItem={renderItem}
      />

      <PopularCategoryRecipeList selectedCategory={selectedCategory} />
    </>
  );
};

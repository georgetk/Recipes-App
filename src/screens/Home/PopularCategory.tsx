import {useQuery} from '@tanstack/react-query';
import React, {useEffect, useState} from 'react';
import {REACT_QUERY_KEYS} from '../../constants';
import {getAllCategories} from '../../api/getAllCategories';
import {FlatList} from 'react-native';
import {styles} from './styles';
import {HorizontalSeparator, MemoizedCategoryButton} from '../../components';
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
        renderItem={({item}) => (
          <MemoizedCategoryButton
            item={item}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
      />

      <PopularCategoryRecipeList selectedCategory={selectedCategory} />
    </>
  );
};

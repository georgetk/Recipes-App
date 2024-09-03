import {useQuery} from '@tanstack/react-query';
import React, {useEffect, useState} from 'react';
import {REACT_QUERY_KEYS} from '../../constants';
import {FlatList} from 'react-native';
import {styles} from './styles';
import {HorizontalSeparator, MemoizedCategoryButton} from '../../components';
import {PopularCategoryRecipeList} from './PopularCategoryRecipeList';
import {getAllCategories} from '../../api';

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

  return (
    <>
      <FlatList
        style={styles.flatListStyle}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={query.data?.categories}
        contentContainerStyle={styles.flatListContentStyle}
        keyExtractor={(item, index) =>
          item?.idCategory?.toString() || `${index}`
        }
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

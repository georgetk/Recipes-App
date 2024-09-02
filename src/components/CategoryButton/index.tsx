import React, {FC, memo} from 'react';
import {TouchableOpacity} from 'react-native';
import PrimaryButton from '../PrimaryButton';
import TextButton from '../TextButton';
import {TCategory} from '../../types';

type TCategoryButton = {
  item: TCategory;
  selectedCategory: string;
  setSelectedCategory: (categoryName: string) => void;
};

const CategoryButton: FC<TCategoryButton> = ({
  item,
  setSelectedCategory,
  selectedCategory,
}) => (
  <TouchableOpacity onPress={() => setSelectedCategory(item?.strCategory)}>
    {item?.strCategory === selectedCategory ? (
      <PrimaryButton text={item?.strCategory} />
    ) : (
      <TextButton text={item?.strCategory} />
    )}
  </TouchableOpacity>
);

export const MemoizedCategoryButton = memo(CategoryButton);

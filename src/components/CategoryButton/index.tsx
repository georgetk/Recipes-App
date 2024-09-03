import React, {FC, memo} from 'react';
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
  <>
    {item?.strCategory === selectedCategory ? (
      <PrimaryButton
        text={item?.strCategory}
        onPress={() => setSelectedCategory(item?.strCategory)}
      />
    ) : (
      <TextButton
        text={item?.strCategory}
        onPress={() => setSelectedCategory(item?.strCategory)}
      />
    )}
  </>
);

export const MemoizedCategoryButton = memo(CategoryButton);

import React, {FC, memo} from 'react';
import PrimaryButton from '../PrimaryButton';
import TextButton from '../TextButton';
import { TCategory } from '../../types/category';

type TCategoryButton = {
  item: TCategory;
  selectedCategory: string | undefined;
  setSelectedCategory: (categoryName: string | undefined) => void;
};

const CategoryButton: FC<TCategoryButton> = ({
  item,
  setSelectedCategory,
  selectedCategory,
}) => (
  <>
    {item?.strCategory === selectedCategory ? (
      <PrimaryButton
        text={item?.strCategory ?? ''}
        onPress={() => setSelectedCategory(item?.strCategory)}
      />
    ) : (
      <TextButton
        text={item?.strCategory ?? ''}
        onPress={() => setSelectedCategory(item?.strCategory)}
      />
    )}
  </>
);

export const MemoizedCategoryButton = memo(CategoryButton);

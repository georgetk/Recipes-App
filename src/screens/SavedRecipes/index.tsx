import React, {useCallback} from 'react';
import {
  BottomSpacer,
  ContainerWithHorizontalMargin,
  LargeTitle,
  MemoizedRecipeListItem,
  VerticalSeparator,
} from '../../components';
import {FlatList, ListRenderItem} from 'react-native';
import {useSavedItem} from '../../hooks/useSavedItem';
import {TMeal} from '../../types';
import MainViewContainer from '../../components/MainViewContainer';
import {styles} from './styles';
import {APP_TEXTS} from '../../constants';

const SavedRecipes: React.FC = () => {
  const {savedRecipes} = useSavedItem();

  const renderItem: ListRenderItem<TMeal> = useCallback(
    ({item}) => (
      <MemoizedRecipeListItem
        item={item}
        styling={styles.savedRecipeListItem}
      />
    ),
    [],
  );
  return (
    <MainViewContainer>
      <ContainerWithHorizontalMargin>
        <LargeTitle
          text={APP_TEXTS.SAVED_RECIPES}
          styling={styles.savedRecipeTitle}
        />

        <FlatList
          data={savedRecipes}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={VerticalSeparator}
          renderItem={renderItem}
          ListFooterComponent={BottomSpacer}
        />
      </ContainerWithHorizontalMargin>
    </MainViewContainer>
  );
};

export default SavedRecipes;

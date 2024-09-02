import React from 'react';
import {
  BottomSpacer,
  ContainerWithHorizontalMargin,
  LargeTitle,
  MemoizedRecipeListItem,
  VerticalSeparator,
} from '../../components';
import {FlatList} from 'react-native';
import {useSavedItem} from '../../hooks/useSavedItem';
import MainViewContainer from '../../components/MainViewContainer';
import {styles} from './styles';
import {APP_TEXTS} from '../../constants';

const SavedRecipes: React.FC = () => {
  const {savedRecipes} = useSavedItem();

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
          renderItem={({item}) => (
            <MemoizedRecipeListItem
              item={item}
              styling={styles.savedRecipeListItem}
            />
          )}
          ListFooterComponent={BottomSpacer}
        />
      </ContainerWithHorizontalMargin>
    </MainViewContainer>
  );
};

export default SavedRecipes;

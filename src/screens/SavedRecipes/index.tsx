import React from 'react';
import {
  BottomSpacer,
  ContainerWithHorizontalMargin,
  LargeTitle,
  MainViewContainer,
  MemoizedRecipeListItem,
  VerticalSeparator,
} from '../../components';
import {FlatList} from 'react-native';
import {styles} from './styles';
import {APP_TEXTS} from '../../constants';
import {useNavigateToRecipeDetails, useSavedItem} from '../../hooks';

const SavedRecipes: React.FC = () => {
  const {savedRecipes} = useSavedItem();

  const handleNavigation = useNavigateToRecipeDetails();

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
              onPress={() => handleNavigation(item.idMeal ?? '')}
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

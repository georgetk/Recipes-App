import React from 'react';
import {
  BottomSpacer,
  ContainerWithHorizontalMargin,
  LargeTitle,
  MainViewContainer,
  MemoizedRecipeListItem,
  VerticalSeparator,
} from '../../components';
import {View} from 'react-native';
import {styles} from './styles';
import {APP_TEXTS} from '../../constants';
import {useNavigateToRecipeDetails, useSavedItem} from '../../hooks';
import {FlashList} from '@shopify/flash-list';
import {getNormalizedVerticalSizeWithPlatformOffset} from '../../utils/scaling';

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

        <View style={styles.flashlistContainer}>
          <FlashList
            data={savedRecipes}
            estimatedItemSize={getNormalizedVerticalSizeWithPlatformOffset(254)}
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
        </View>
      </ContainerWithHorizontalMargin>
    </MainViewContainer>
  );
};

export default SavedRecipes;

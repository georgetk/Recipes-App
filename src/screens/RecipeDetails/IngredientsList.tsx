import React, {FC} from 'react';
import {
  BodyText,
  BottomSpacer,
  BoxContainerForCreateAndDetails,
  Title,
  VerticalSeparator,
} from '../../components';
import {APP_COLORS, APP_TEXTS} from '../../constants';
import {FlatList, ListRenderItem, View} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  TIngredientsAndMeasureObject,
  TMealDetailsResponseWithIngredientsAndMeasures,
} from '../../types/recipeDetails';

type TIngredientsList = {
  mealItem: TMealDetailsResponseWithIngredientsAndMeasures | undefined;
};

export const IngredientsList: FC<TIngredientsList> = ({mealItem}) => {
  const renderItem: ListRenderItem<TIngredientsAndMeasureObject> = ({item}) => (
    <BoxContainerForCreateAndDetails
      text={item?.ingredient ?? ''}
      leftItem={
        <Icon name="food-variant" color={APP_COLORS.PRIMARY_COLOR} size={32} />
      }
      rightItem={
        <BodyText text={item?.measure ?? ''} styling={styles.itemsCount} />
      }
    />
  );

  return (
    <View style={styles.ingredientsContainer}>
      <View style={styles.ingredientsTitleContainer}>
        <Title text={APP_TEXTS.INGREDIENTS} />
        <BodyText
          text={`${mealItem?.ingredientsAndMeasures.length} ${APP_TEXTS.ITEMS}`}
          styling={styles.itemsCount}
        />
      </View>

      <FlatList
        data={mealItem?.ingredientsAndMeasures}
        renderItem={renderItem}
        ItemSeparatorComponent={VerticalSeparator}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={BottomSpacer}
      />
    </View>
  );
};

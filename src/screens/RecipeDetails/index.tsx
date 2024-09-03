import React, {FC, useEffect, useState} from 'react';
import {
  ContainerWithHorizontalMargin,
  HeaderBarBackIconAndDots,
  LargeTitle,
  MainViewContainer,
  RecipeImageBackground,
} from '../../components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NAVIGATOR_ID, REACT_QUERY_KEYS, ROUTE_NAMES} from '../../constants';
import {useQuery} from '@tanstack/react-query';
import {getRecipeDetails} from '../../api/getRecipeDetails';
import {styles} from './styles';
import {IngredientsList} from './IngredientsList';
import { TRootStackParamList } from '../../types/navigation';
import { TMealDetailsResponseWithIngredientsAndMeasures } from '../../types/recipeDetails';

type Props = NativeStackScreenProps<
  TRootStackParamList,
  ROUTE_NAMES.RECIPE_DETAILS_STACK,
  NAVIGATOR_ID.STACK
>;

export const RecipeDetails: FC<Props> = ({navigation, route}) => {
  const {
    params: {idMeal},
  } = route;

  const [mealItem, setMealItem] =
    useState<TMealDetailsResponseWithIngredientsAndMeasures>();

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'flex',
        },
      });
    };
  }, [navigation]);

  const query = useQuery({
    queryKey: [REACT_QUERY_KEYS.ALL_CATEGORIES],
    queryFn: () => getRecipeDetails(idMeal),
  });

  useEffect(() => {
    if (query.data && query.data?.meals?.[0]) {
      setMealItem(query.data?.meals?.[0]);
    }
  }, [query.data]);

  return (
    <MainViewContainer>
      <ContainerWithHorizontalMargin setFlex>
        <HeaderBarBackIconAndDots />
        <LargeTitle text={mealItem?.strMeal ?? ''} styling={styles.titleText} />
        {mealItem ? (
          <RecipeImageBackground
            item={mealItem}
            isPreview={false}
            showSaveButton={false}
          />
        ) : null}

        <IngredientsList mealItem={mealItem} />
      </ContainerWithHorizontalMargin>
    </MainViewContainer>
  );
};

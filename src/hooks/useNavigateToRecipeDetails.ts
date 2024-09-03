import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {ROUTE_NAMES} from '../constants';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TRootStackParamList, TRootTabsParamList} from '../types/navigation';

type TabScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TRootTabsParamList, ROUTE_NAMES.SAVED_RECIPES>,
  NativeStackNavigationProp<TRootStackParamList>
>;

export const useNavigateToRecipeDetails = (): ((idMeal: string) => void) => {
  const navigation = useNavigation<TabScreenNavigationProp>();

  const handleNavigation = useCallback(
    (idMeal: string) =>
      navigation.navigate(ROUTE_NAMES.RECIPE_DETAILS_STACK, {idMeal}),
    [navigation],
  );

  return handleNavigation;
};

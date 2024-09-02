import React, {FC} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SavedRecipes from '../screens/SavedRecipes';
import {ROUTE_NAMES} from '../constants';


const Stack = createNativeStackNavigator();

const StackNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ROUTE_NAMES.SAVED_RECIPES_STACK}
        component={SavedRecipes}
      />
      <Stack.Screen
        name={ROUTE_NAMES.RECIPE_DETAIL_STACK}
        component={SavedRecipes}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

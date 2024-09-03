import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAVIGATOR_ID, ROUTE_NAMES} from '../constants';
import {RecipeDetails} from '../screens/RecipeDetails';
import {Tabs} from '.';
import {TRootStackParamList} from '../types/navigation';
import CreateRecipe from '../screens/CreateRecipe';

const Stack = createNativeStackNavigator<TRootStackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      id={NAVIGATOR_ID.STACK}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTE_NAMES.HOME_STACK} component={Tabs} />
      <Stack.Screen
        name={ROUTE_NAMES.RECIPE_DETAILS_STACK}
        component={RecipeDetails}
      />
      <Stack.Screen
        name={ROUTE_NAMES.CREATE_RECIPE_STACK}
        component={CreateRecipe}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

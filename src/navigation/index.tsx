import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import CreateRecipe from '../screens/CreateRecipe';
import MyProfile from '../screens/MyProfile';
import {Notifications} from '../screens/Notifications';
import {ROUTE_NAMES} from '../constants';
import StackNavigator from './StackNavigator';
import {CustomTabBar} from './CustomTabBar';

const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator tabBar={CustomTabBar} screenOptions={{headerShown: false}}>
      <Tab.Screen name={ROUTE_NAMES.HOME} component={Home} />
      <Tab.Screen name={ROUTE_NAMES.SAVED_RECIPES} component={StackNavigator} />
      <Tab.Screen name={ROUTE_NAMES.CREATE_RECIPE} component={CreateRecipe} />
      <Tab.Screen name={ROUTE_NAMES.NOTIFICATIONS} component={Notifications} />
      <Tab.Screen name={ROUTE_NAMES.MY_PROFILE} component={MyProfile} />
    </Tab.Navigator>
  );
}

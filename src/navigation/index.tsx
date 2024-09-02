import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

import Home from '../screens/Home';
import SavedRecipes from '../screens/SavedRecipes';
import CreateRecipe from '../screens/CreateRecipe';
import MyProfile from '../screens/MyProfile';
import {Notifications} from '../screens/Notifications';
import {APP_COLORS, ROUTE_NAMES} from '../constants';
import {styles} from './styles';

const tabBarImage = require('../assets/images/bottomTabBar.png');

const getIconForRoute = (
  routeName: string,
  isFocused: boolean,
): React.ReactNode => {
  const color = isFocused ? APP_COLORS.PRIMARY_COLOR : APP_COLORS.GREY;

  switch (routeName) {
    case ROUTE_NAMES.HOME:
      return <Icon name="home" color={color} size={23} />;
    case ROUTE_NAMES.SAVED_RECIPES:
      return <Icon name="bookmark" color={color} size={23} />;
    case ROUTE_NAMES.CREATE_RECIPE:
      return (
        <View style={styles.plusIconContainer}>
          <View style={styles.plusIcon}>
            <Icon name="plus" color={APP_COLORS.WHITE} size={23} />
          </View>
        </View>
      );
    case ROUTE_NAMES.NOTIFICATIONS:
      return <Icon name="bell" color={color} size={23} />;
    case ROUTE_NAMES.MY_PROFILE:
      return <Icon name="person" color={color} size={23} />;
    default:
      return <Icon name="home" color={color} size={23} />;
  }
};

const CustomTabBar: React.FC<BottomTabBarProps> = ({state, navigation}) => {
  return (
    <View style={styles.tabBarView}>
      <ImageBackground
        style={styles.tabBarBgImage}
        source={tabBarImage}
        imageStyle={{}}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.tabBarTouchable}>
              {getIconForRoute(route.name, isFocused)}
            </TouchableOpacity>
          );
        })}
      </ImageBackground>
    </View>
  );
};

const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator tabBar={CustomTabBar} screenOptions={{headerShown: false}}>
      <Tab.Screen name={ROUTE_NAMES.HOME} component={Home} />
      <Tab.Screen name={ROUTE_NAMES.SAVED_RECIPES} component={SavedRecipes} />
      <Tab.Screen name={ROUTE_NAMES.CREATE_RECIPE} component={CreateRecipe} />
      <Tab.Screen name={ROUTE_NAMES.NOTIFICATIONS} component={Notifications} />
      <Tab.Screen name={ROUTE_NAMES.MY_PROFILE} component={MyProfile} />
    </Tab.Navigator>
  );
}

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {ROUTE_NAMES} from '../constants/routeNames';
import SavedRecipes from '../screens/SavedRecipes';
import CreateRecipe from '../screens/CreateRecipe';
import {Notifications} from '../screens/Notifications';
import MyProfile from '../screens/MyProfile';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

import tabBarImage from '../assets/images/bottomTabBar.png';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../utils/scaling';
import {APP_COLORS} from '../constants/colors';

const Tab = createBottomTabNavigator();

const getIconForRoute = (routeName: string) => {
  switch (routeName) {
    case ROUTE_NAMES.HOME:
      return <Icon name="home" color={APP_COLORS.PRIMARY_COLOR} size={23} />;
    case ROUTE_NAMES.SAVED_RECIPES:
      return (
        <Icon name="bookmark" color={APP_COLORS.PRIMARY_COLOR} size={23} />
      );
    case ROUTE_NAMES.CREATE_RECIPE:
      return (
        <View style={styles.plusIconContainer}>
          <View style={styles.plusIcon}>
            <Icon name="plus" color={APP_COLORS.WHITE} size={23} />
          </View>
        </View>
      );
    case ROUTE_NAMES.NOTIFICATIONS:
      return <Icon name="bell" color={APP_COLORS.PRIMARY_COLOR} size={23} />;
    case ROUTE_NAMES.MY_PROFILE:
      return <Icon name="person" color={APP_COLORS.PRIMARY_COLOR} size={23} />;

    default:
      return <Icon name="home" color={APP_COLORS.PRIMARY_COLOR} size={23} />;
  }
};

function CustomTabBar({state, navigation}) {
  return (
    <ImageBackground style={styles.tabBarBgImage} source={tabBarImage}>
      {state.routes.map(
        (
          route: {key: string | number; name: string; params: any},
          index: any,
        ) => {
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

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabBarTouchable}>
              {getIconForRoute(route.name)}
            </TouchableOpacity>
          );
        },
      )}
    </ImageBackground>
  );
}

export function Tabs() {
  return (
    <Tab.Navigator tabBar={CustomTabBar}>
      <Tab.Screen name={ROUTE_NAMES.HOME} component={Home} />
      <Tab.Screen name={ROUTE_NAMES.SAVED_RECIPES} component={SavedRecipes} />
      <Tab.Screen name={ROUTE_NAMES.CREATE_RECIPE} component={CreateRecipe} />
      <Tab.Screen name={ROUTE_NAMES.NOTIFICATIONS} component={Notifications} />
      <Tab.Screen name={ROUTE_NAMES.MY_PROFILE} component={MyProfile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabBarBgImage: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    height: getNormalizedVerticalSizeWithPlatformOffset(100),
  },
  tabBarTouchable: {
    flex: 1,
    alignItems: 'center',
    paddingTop: getNormalizedVerticalSizeWithPlatformOffset(10),
  },
  plusIconContainer: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    width: getNormalizedSizeWithPlatformOffset(50),
    height: getNormalizedSizeWithPlatformOffset(50),
    borderRadius: getNormalizedSizeWithPlatformOffset(50) / 2,
    backgroundColor: APP_COLORS.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

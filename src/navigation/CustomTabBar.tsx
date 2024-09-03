import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {ImageBackground, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

import {styles} from './styles';
import {APP_COLORS, ROUTE_NAMES} from '../constants';

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

export const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  navigation,
}) => {
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
              if (route.name === ROUTE_NAMES.CREATE_RECIPE) {
                navigation.navigate(
                  ROUTE_NAMES.CREATE_RECIPE_STACK,
                  route.params,
                );
              } else {
                navigation.navigate(route.name, route.params);
              }
            }
          };

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              style={styles.tabBarTouchable}>
              {getIconForRoute(route.name, isFocused)}
            </Pressable>
          );
        })}
      </ImageBackground>
    </View>
  );
};

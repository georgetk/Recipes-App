import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {APP_COLORS} from '../../constants/colors';
import {useNotchHeight} from '../../hooks/useNotchHeight';

type TMainContainer = {
  children: ReactNode;
};

const MainContainer: React.FC<TMainContainer> = ({children}) => {
  const topHeight = useNotchHeight();

  return (
    <View style={[styles.container, {paddingTop: topHeight}]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: APP_COLORS.WHITE},
});

export default MainContainer;

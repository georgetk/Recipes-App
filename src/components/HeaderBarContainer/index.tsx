import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

type THeaderBarContainer = {
  children: ReactNode;
};

export const HeaderBarContainer: React.FC<THeaderBarContainer> = ({
  children,
}) => {
  return <View style={style.container}>{children}</View>;
};

const style = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

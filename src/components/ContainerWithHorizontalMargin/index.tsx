import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {getNormalizedSizeWithPlatformOffset} from '../../utils/scaling';

type TContainerWithHorizontalMarginProps = {
  children: ReactNode;
  setFlex?: boolean;
};

const ContainerWithHorizontalMargin: React.FC<
  TContainerWithHorizontalMarginProps
> = ({children, setFlex = false}) => {
  return (
    <View style={[styles.container, setFlex ? styles.flex1 : styles.flex0]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: getNormalizedSizeWithPlatformOffset(30),
  },
  flex0: {flex: 0},
  flex1: {flex: 1},
});

export default ContainerWithHorizontalMargin;

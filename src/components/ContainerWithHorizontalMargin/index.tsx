import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {getNormalizedSizeWithPlatformOffset} from '../../utils/scaling';

type TContainerWithHorizontalMarginProps = {
  children: ReactNode;
};

const ContainerWithHorizontalMargin: React.FC<
  TContainerWithHorizontalMarginProps
> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: getNormalizedSizeWithPlatformOffset(30),
  },
});

export default ContainerWithHorizontalMargin;

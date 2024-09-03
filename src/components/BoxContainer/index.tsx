import React, {FC, ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';
import {APP_COLORS} from '../../constants';

type TBoxContainer = {
  children: ReactNode;
};

export const BoxContainer: FC<TBoxContainer> = ({children}) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: APP_COLORS.BOX_BG,
    width: '100%',
    paddingHorizontal: getNormalizedSizeWithPlatformOffset(15),
    paddingVertical: getNormalizedVerticalSizeWithPlatformOffset(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: getNormalizedSizeWithPlatformOffset(12),
  },
});

import React, {FC, ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';
import {APP_COLORS} from '../../constants';
import {BoxContainer} from '../BoxContainer';
import Subtitle from '../Subtitle';

type BoxContainerForCreateAndDetails = {
  leftItem: ReactNode;
  rightItem: ReactNode;
  text: string;
};

export const BoxContainerForCreateAndDetails: FC<
  BoxContainerForCreateAndDetails
> = ({leftItem, rightItem, text}) => (
  <BoxContainer>
    <View style={styles.boxAndTitleContainer}>
      <View style={styles.whiteBox}>{leftItem}</View>
      <Subtitle text={text} />
    </View>

    {rightItem}
  </BoxContainer>
);

const styles = StyleSheet.create({
  boxAndTitleContainer: {flexDirection: 'row', alignItems: 'center'},
  whiteBox: {
    width: getNormalizedVerticalSizeWithPlatformOffset(52),
    height: getNormalizedVerticalSizeWithPlatformOffset(52),
    backgroundColor: APP_COLORS.WHITE,
    borderRadius: getNormalizedVerticalSizeWithPlatformOffset(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: getNormalizedSizeWithPlatformOffset(15),
  },
});

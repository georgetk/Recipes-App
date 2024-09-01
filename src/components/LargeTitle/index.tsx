import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';
import {APP_COLORS} from '../../constants';

type TLargeTitle = {
  text: string;
  styling?: TextStyle;
};

export const LargeTitle: React.FC<TLargeTitle> = ({text, styling}) => {
  return <Text style={[styles.largeTitle, styling]}>{text}</Text>;
};

const styles = StyleSheet.create({
  largeTitle: {
    fontSize: getNormalizedSizeWithPlatformOffset(24),
    lineHeight: getNormalizedVerticalSizeWithPlatformOffset(28.8),
    fontWeight: 'bold',
    color: APP_COLORS.TEXT_COLOR,
  },
});

export default LargeTitle;

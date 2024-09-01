import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';
import {APP_COLORS} from '../../constants';

type TCaption = {
  text: string;
  styling?: TextStyle;
};

export const Caption: React.FC<TCaption> = ({text, styling}) => {
  return <Text style={[styles.caption, styling]}>{text}</Text>;
};

const styles = StyleSheet.create({
  caption: {
    fontSize: getNormalizedSizeWithPlatformOffset(12),
    lineHeight: getNormalizedVerticalSizeWithPlatformOffset(18),
    color: APP_COLORS.TEXT_COLOR,
  },
});

export default Caption;

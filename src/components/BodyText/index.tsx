import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';
import {APP_COLORS} from '../../constants';

type TBodyText = {
  text: string;
  styling?: TextStyle;
};

export const BodyText: React.FC<TBodyText> = ({text, styling}) => {
  return <Text style={[styles.bodyText, styling]}>{text}</Text>;
};

const styles = StyleSheet.create({
  bodyText: {
    fontSize: getNormalizedSizeWithPlatformOffset(14),
    lineHeight: getNormalizedVerticalSizeWithPlatformOffset(19.6),
    fontWeight: 'bold',
    color: APP_COLORS.TEXT_COLOR,
  },
  caption: {
    fontSize: 12,
  },
});

export default BodyText;

import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';
import {APP_COLORS} from '../../constants';

type TSubtitle = {
  text: string;
  styling?: TextStyle;
};

export const Subtitle: React.FC<TSubtitle> = ({text, styling}) => {
  return <Text style={[styles.subtitle, styling]}>{text}</Text>;
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: getNormalizedSizeWithPlatformOffset(16),
    lineHeight: getNormalizedVerticalSizeWithPlatformOffset(22.4),
    fontWeight: 'bold',
    color: APP_COLORS.TEXT_COLOR,
  },
});

export default Subtitle;

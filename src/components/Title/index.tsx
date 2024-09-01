import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';
import {APP_COLORS} from '../../constants';

type TTitle = {
  text: string;
  styling?: TextStyle;
};

export const Title: React.FC<TTitle> = ({text, styling}) => {
  return <Text style={[styles.title, styling]}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: getNormalizedSizeWithPlatformOffset(20),
    lineHeight: getNormalizedVerticalSizeWithPlatformOffset(28),
    fontWeight: 'bold',
    color: APP_COLORS.TEXT_COLOR,
  },
});

export default Title;

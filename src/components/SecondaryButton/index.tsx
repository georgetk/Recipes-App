import React from 'react';
import {Pressable, StyleSheet, ViewStyle} from 'react-native';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';
import {APP_COLORS} from '../../constants';
import BodyText from '../BodyText';

type TSecondaryButton = {
  text: string;
  onPress?: () => void;
  styling: ViewStyle;
};

export const SecondaryButton: React.FC<TSecondaryButton> = ({
  text,
  onPress = () => {},
  styling,
}) => (
  <Pressable style={[styles.container, styling]} onPress={onPress}>
    <BodyText text={text} styling={styles.captionText} />
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: getNormalizedVerticalSizeWithPlatformOffset(36),
    borderRadius: getNormalizedSizeWithPlatformOffset(10),
    backgroundColor: APP_COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: getNormalizedSizeWithPlatformOffset(2),
    borderColor: APP_COLORS.PRIMARY_COLOR,
  },
  captionText: {fontWeight: 'bold', color: APP_COLORS.PRIMARY_COLOR},
});

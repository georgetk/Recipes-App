import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';
import {APP_COLORS} from '../../constants';
import Caption from '../Caption';

type TPrimaryButton = {
  text: string;
  onPress: () => void;
};

const PrimaryButton: React.FC<TPrimaryButton> = ({text, onPress}) => (
  <Pressable style={styles.container} onPress={onPress}>
    <Caption text={text} styling={styles.captionText} />
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    width: getNormalizedSizeWithPlatformOffset(83),
    height: getNormalizedVerticalSizeWithPlatformOffset(34),
    borderRadius: getNormalizedSizeWithPlatformOffset(10),
    backgroundColor: APP_COLORS.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captionText: {fontWeight: 'bold', color: APP_COLORS.WHITE},
});

export default PrimaryButton;

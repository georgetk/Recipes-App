import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Caption from '../Caption';
import {APP_COLORS} from '../../constants';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';

type TTextButton = {
  text: string;
  onPress: () => void;
};

const TextButton: React.FC<TTextButton> = ({text, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Caption text={text} styling={styles.captionText} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: getNormalizedSizeWithPlatformOffset(12),
    height: getNormalizedVerticalSizeWithPlatformOffset(34),
    justifyContent: 'center',
  },
  captionText: {fontWeight: 'bold', color: APP_COLORS.PRIMARY_COLOR},
});

export default TextButton;

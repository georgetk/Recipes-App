import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';
import {APP_COLORS} from '../../constants';
import Subtitle from '../Subtitle';

type TPrimaryButtonLarge = {
  text: string;
  onPress: () => void;
};

const PrimaryButtonLarge: React.FC<TPrimaryButtonLarge> = ({text, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Subtitle text={text} styling={styles.text} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: getNormalizedVerticalSizeWithPlatformOffset(54),
    borderRadius: getNormalizedSizeWithPlatformOffset(10),
    backgroundColor: APP_COLORS.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: APP_COLORS.WHITE},
});

export default PrimaryButtonLarge;

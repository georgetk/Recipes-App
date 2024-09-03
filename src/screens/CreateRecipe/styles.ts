import {StyleSheet} from 'react-native';
import {getNormalizedVerticalSizeWithPlatformOffset} from '../../utils/scaling';

export const styles = StyleSheet.create({
  titleText: {
    paddingVertical: getNormalizedVerticalSizeWithPlatformOffset(20),
  },
});

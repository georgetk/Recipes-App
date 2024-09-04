import { StyleSheet} from 'react-native';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';
import {APP_COLORS} from '../../constants';

export const styles = StyleSheet.create({
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
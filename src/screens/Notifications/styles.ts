import {StyleSheet} from 'react-native';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';
import {APP_COLORS} from '../../constants';

export const styles = StyleSheet.create({
  todayText: {
    paddingTop: getNormalizedVerticalSizeWithPlatformOffset(40),
    paddingBottom: getNormalizedVerticalSizeWithPlatformOffset(20),
  },
  iconAndTextContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: APP_COLORS.PALE_GREEN,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: getNormalizedSizeWithPlatformOffset(15),
  },
  boldText: {
    fontWeight: 'bold',
  },
  textDescription: {
    paddingTop: getNormalizedVerticalSizeWithPlatformOffset(10),
    color: APP_COLORS.NEUTRAL_TEXT_COLOR,
  },
});

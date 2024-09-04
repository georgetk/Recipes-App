import {StyleSheet} from 'react-native';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';
import {APP_COLORS} from '../../constants';

export const styles = StyleSheet.create({
  headerIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '25%',
    justifyContent: 'space-between',
    paddingVertical: getNormalizedSizeWithPlatformOffset(10),
    paddingLeft: getNormalizedSizeWithPlatformOffset(10),
  },
  profileImageAndButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: getNormalizedSizeWithPlatformOffset(20),
  },
  imageContainer: {
    width: getNormalizedSizeWithPlatformOffset(80),
    height: getNormalizedSizeWithPlatformOffset(80),
    borderRadius: getNormalizedSizeWithPlatformOffset(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: APP_COLORS.BOX_BG,
  },
  editProfileButton: {width: getNormalizedSizeWithPlatformOffset(100)},
  userIntroText: {
    fontWeight: '400',
    color: APP_COLORS.NEUTRAL_TEXT_COLOR,
    marginVertical: getNormalizedVerticalSizeWithPlatformOffset(10),
  },
});

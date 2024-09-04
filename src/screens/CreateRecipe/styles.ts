import {StyleSheet} from 'react-native';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';
import {APP_COLORS} from '../../constants';

export const styles = StyleSheet.create({
  titleText: {
    paddingVertical: getNormalizedVerticalSizeWithPlatformOffset(20),
  },
  imageContainer: {
    width: '100%',
    height: getNormalizedVerticalSizeWithPlatformOffset(180),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: APP_COLORS.BOX_BG,
    borderRadius: getNormalizedVerticalSizeWithPlatformOffset(12),
  },
  inputField: {
    marginVertical: getNormalizedVerticalSizeWithPlatformOffset(20),
  },
  boxAndTitleContainer: {flexDirection: 'row', alignItems: 'center'},
  whiteBox: {
    width: getNormalizedVerticalSizeWithPlatformOffset(52),
    height: getNormalizedVerticalSizeWithPlatformOffset(52),
    backgroundColor: APP_COLORS.WHITE,
    borderRadius: getNormalizedVerticalSizeWithPlatformOffset(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: getNormalizedSizeWithPlatformOffset(15),
  },
  servesTextContainer: {
    width: getNormalizedSizeWithPlatformOffset(56),
    backgroundColor: APP_COLORS.WHITE,
    paddingHorizontal: 5,
  },
  servesTextStyle: {
    textAlign: 'right',
    lineHeight: 0,
  },
  primaryButtonContainer: {
    height: getNormalizedVerticalSizeWithPlatformOffset(54),
  },
  inoutFieldsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

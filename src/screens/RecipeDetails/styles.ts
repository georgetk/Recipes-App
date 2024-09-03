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
  ingredientsTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: getNormalizedVerticalSizeWithPlatformOffset(20),
  },
  itemsCount: {fontWeight: '400'},
  whiteBox: {
    width: getNormalizedVerticalSizeWithPlatformOffset(52),
    height: getNormalizedVerticalSizeWithPlatformOffset(52),
    backgroundColor: APP_COLORS.WHITE,
    borderRadius: getNormalizedVerticalSizeWithPlatformOffset(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: getNormalizedSizeWithPlatformOffset(15),
  },
});

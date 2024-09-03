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
  ingredientsContainer: {flex: 1},
  ingredientsTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: getNormalizedVerticalSizeWithPlatformOffset(20),
  },
  itemsCount: {fontWeight: '400'},
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
  bottomSpacing: {
    height: getNormalizedVerticalSizeWithPlatformOffset(400),
  },
});

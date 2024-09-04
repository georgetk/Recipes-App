import {StyleSheet} from 'react-native';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';
import { APP_COLORS } from '../../constants';

export const styles = StyleSheet.create({
  popularRecipeContainer: {
    width: getNormalizedSizeWithPlatformOffset(150),
    height: getNormalizedVerticalSizeWithPlatformOffset(250),
    justifyContent: 'flex-end',
  },
  bottomView: {
    backgroundColor: APP_COLORS.PALE_BLUE,
    width: '100%',
    height: getNormalizedVerticalSizeWithPlatformOffset(190),
    borderRadius: getNormalizedSizeWithPlatformOffset(12),
  },
  popularRecipeImageContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: -getNormalizedVerticalSizeWithPlatformOffset(120) / 2,
    borderRadius: getNormalizedVerticalSizeWithPlatformOffset(120) / 2,
    width: getNormalizedVerticalSizeWithPlatformOffset(120),
    height: getNormalizedVerticalSizeWithPlatformOffset(120),
    justifyContent: 'center',
    alignItems: 'center',
    // shadowColor: APP_COLORS.GREY,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
    // backgroundColor: 'rgba(0,0,0,0.5)',
  },
  popularRecipeImage: {
    width: getNormalizedVerticalSizeWithPlatformOffset(120),
    height: getNormalizedVerticalSizeWithPlatformOffset(120),
    borderRadius: getNormalizedVerticalSizeWithPlatformOffset(120) / 2,
  },
  bottomBodyContainer: {
    marginHorizontal: getNormalizedSizeWithPlatformOffset(15),
  },
  popularRecipeTitle: {
    textAlign: 'center',
    marginTop: getNormalizedSizeWithPlatformOffset(110) / 2 + 20,
    alignSelf: 'center',
    height: getNormalizedVerticalSizeWithPlatformOffset(45),
  },
  bottomBodyView: {
    marginTop: getNormalizedVerticalSizeWithPlatformOffset(10),
  },
  bottomTimeLabel: {color: APP_COLORS.NEUTRAL},
  bottomTimeAndButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomTimeValueText: {fontWeight: 'bold'},
});

import {StyleSheet} from 'react-native';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';
import {APP_COLORS} from '../../constants';

export const styles = StyleSheet.create({
  greetingText: {
    width: getNormalizedSizeWithPlatformOffset(201),
  },
  searchBar: {
    marginVertical: getNormalizedVerticalSizeWithPlatformOffset(20),
  },
  flatListStyle: {
    marginVertical: getNormalizedVerticalSizeWithPlatformOffset(20),
  },
  flatListContentStyle: {
    paddingHorizontal: getNormalizedSizeWithPlatformOffset(30),
    alignItems: 'center',
  },
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
    top: -getNormalizedSizeWithPlatformOffset(110) / 2,
    borderRadius: getNormalizedSizeWithPlatformOffset(120) / 2,
    width: getNormalizedSizeWithPlatformOffset(120),
    height: getNormalizedSizeWithPlatformOffset(120),
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
    width: getNormalizedSizeWithPlatformOffset(110),
    height: getNormalizedSizeWithPlatformOffset(110),
    borderRadius: getNormalizedSizeWithPlatformOffset(110) / 2,
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

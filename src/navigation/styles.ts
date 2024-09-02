import {StyleSheet} from 'react-native';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../utils/scaling';
import {APP_COLORS} from '../constants';

export const styles = StyleSheet.create({
  tabBarView: {
    width: '100%',
    flexDirection: 'row',
    height: getNormalizedVerticalSizeWithPlatformOffset(100),
    position: 'absolute',
    bottom: 0,
    // shadowColor: APP_COLORS.GREY,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    //elevation: 5,
  },
  tabBarBgImage: {
    width: '100%',
    flexDirection: 'row',
    height: getNormalizedVerticalSizeWithPlatformOffset(100),
  },
  tabBarTouchable: {
    flex: 1,
    alignItems: 'center',
    paddingTop: getNormalizedVerticalSizeWithPlatformOffset(20),
  },
  plusIconContainer: {
    top: -40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    width: getNormalizedSizeWithPlatformOffset(50),
    height: getNormalizedSizeWithPlatformOffset(50),
    borderRadius: getNormalizedSizeWithPlatformOffset(50) / 2,
    backgroundColor: APP_COLORS.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

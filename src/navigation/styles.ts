import {StyleSheet} from 'react-native';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../utils/scaling';
import {APP_COLORS} from '../constants';

export const styles = StyleSheet.create({
  tabBarBgImage: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    height: getNormalizedVerticalSizeWithPlatformOffset(100),
  },
  tabBarTouchable: {
    flex: 1,
    alignItems: 'center',
    paddingTop: getNormalizedVerticalSizeWithPlatformOffset(10),
  },
  plusIconContainer: {
    top: -30,
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

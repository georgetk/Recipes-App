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
  trendingItemContainer: {
    borderRadius: getNormalizedSizeWithPlatformOffset(10),
    width: getNormalizedSizeWithPlatformOffset(280),
  },
  trendingImageItem: {
    width: getNormalizedSizeWithPlatformOffset(280),
    height: getNormalizedVerticalSizeWithPlatformOffset(180),
  },
  trendingImageStyle: {
    borderRadius: getNormalizedSizeWithPlatformOffset(10),
  },
  saveButton: {
    width: getNormalizedSizeWithPlatformOffset(32),
    height: getNormalizedSizeWithPlatformOffset(32),
    borderRadius: getNormalizedSizeWithPlatformOffset(32) / 2,
    backgroundColor: APP_COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    top: 8,
    left: getNormalizedSizeWithPlatformOffset(240),
  },
  trendingItemText: {
    marginTop: getNormalizedVerticalSizeWithPlatformOffset(20),
  },
});

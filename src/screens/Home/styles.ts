import {StyleSheet} from 'react-native';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';

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
});

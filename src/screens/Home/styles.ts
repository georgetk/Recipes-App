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
  recipeItemsFlashlistContainer: {
    marginVertical: getNormalizedVerticalSizeWithPlatformOffset(35),
    height: getNormalizedVerticalSizeWithPlatformOffset(250),
    width: '100%',
    alignItems: 'center',
  },
  flashListContentStyle: {
    paddingHorizontal: getNormalizedSizeWithPlatformOffset(30),
  },
  categoryFlashlistContainer: {
    marginVertical: getNormalizedVerticalSizeWithPlatformOffset(20),
    height: getNormalizedVerticalSizeWithPlatformOffset(34),
    width: '100%',
    alignItems: 'center',
  },
});

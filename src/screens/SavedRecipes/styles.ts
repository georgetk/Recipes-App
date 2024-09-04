import {StyleSheet} from 'react-native';
import {getNormalizedVerticalSizeWithPlatformOffset} from '../../utils/scaling';

export const styles = StyleSheet.create({
  savedRecipeTitle: {
    marginBottom: getNormalizedVerticalSizeWithPlatformOffset(30),
  },
  savedRecipeListItem: {width: '100%'},
  flashlistContainer: {height: '100%', width: '100%'},
});

import React from 'react';
import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {useSavedItem} from '../../hooks/useSavedItem';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';
import {APP_COLORS} from '../../constants';
import {TMeal} from '../../types';

type TSaveButton = {
  item: TMeal;
};

export const SaveButton: React.FC<TSaveButton> = ({item}) => {
  const [getColor, handleSavePress] = useSavedItem();

  return (
    <ImageBackground
      resizeMode="cover"
      source={{uri: `${item?.strMealThumb}/preview`}}
      style={styles.imageItem}
      imageStyle={styles.imageStyle}>
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => handleSavePress(item)}>
        <Icon name="bookmark" color={getColor(item)} size={23} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageItem: {
    width: getNormalizedSizeWithPlatformOffset(280),
    height: getNormalizedVerticalSizeWithPlatformOffset(180),
  },
  imageStyle: {
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
});

import React from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {getNormalizedSizeWithPlatformOffset} from '../../utils/scaling';
import {APP_COLORS} from '../../constants';
import { useSavedItem } from '../../hooks';
import { TMeal } from '../../types/recipe';

type TSaveButton = {
  item: TMeal
  styling?: ViewStyle;
};

export const SaveButton: React.FC<TSaveButton> = ({item, styling}) => {
  const {getColor, handleSavePress} = useSavedItem();

  return (
    <TouchableOpacity
      style={[styles.saveButton, styling]}
      onPress={() => handleSavePress(item)}>
      <Icon name="bookmark" color={getColor(item)} size={23} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  saveButton: {
    width: getNormalizedSizeWithPlatformOffset(32),
    height: getNormalizedSizeWithPlatformOffset(32),
    borderRadius: getNormalizedSizeWithPlatformOffset(32) / 2,
    backgroundColor: APP_COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

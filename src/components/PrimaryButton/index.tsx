import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../utils/scaling';
import {APP_COLORS} from '../../constants';
import Caption from '../Caption';

type TPrimaryButton = {
  text: string;
};

const PrimaryButton: React.FC<TPrimaryButton> = ({text}) => {
  return (
    <View style={styles.container}>
      <Caption text={text} styling={styles.captionText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: getNormalizedSizeWithPlatformOffset(83),
    height: getNormalizedVerticalSizeWithPlatformOffset(34),
    borderRadius: getNormalizedSizeWithPlatformOffset(10),
    padding: getNormalizedSizeWithPlatformOffset(5),
    backgroundColor: APP_COLORS.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captionText: {fontWeight: 'bold', color: APP_COLORS.WHITE},
});

export default PrimaryButton;

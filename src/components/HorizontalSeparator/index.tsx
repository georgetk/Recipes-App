import React from 'react';
import {StyleSheet, View} from 'react-native';
import {getNormalizedSizeWithPlatformOffset} from '../../utils/scaling';

const HorizontalSeparator: React.FC = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    width: getNormalizedSizeWithPlatformOffset(20),
  },
});

export default HorizontalSeparator;

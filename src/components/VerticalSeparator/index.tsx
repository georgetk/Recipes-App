import React from 'react';
import {StyleSheet, View} from 'react-native';
import {getNormalizedVerticalSizeWithPlatformOffset} from '../../utils/scaling';

const VerticalSeparator: React.FC = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: getNormalizedVerticalSizeWithPlatformOffset(20),
  },
});

export default VerticalSeparator;

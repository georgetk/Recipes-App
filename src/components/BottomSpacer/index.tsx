import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {getNormalizedVerticalSizeWithPlatformOffset} from '../../utils/scaling';

const BottomSpacer: FC = () => {
  return <View style={styles.bottomSpacer} />;
};

const styles = StyleSheet.create({
  bottomSpacer: {
    height: getNormalizedVerticalSizeWithPlatformOffset(200),
  },
});

export default BottomSpacer;

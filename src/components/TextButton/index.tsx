import React from 'react';
import {StyleSheet, View} from 'react-native';
import Caption from '../Caption';
import {APP_COLORS} from '../../constants';

type TTextButton = {
  text: string;
};

const TextButton: React.FC<TTextButton> = ({text}) => {
  return (
    <View>
      <Caption text={text} styling={styles.captionText} />
    </View>
  );
};

const styles = StyleSheet.create({
  captionText: {fontWeight: 'bold', color: APP_COLORS.PRIMARY_COLOR},
});

export default TextButton;

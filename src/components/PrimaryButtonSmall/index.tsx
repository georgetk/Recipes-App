import React from 'react';
import {Pressable} from 'react-native';
import Caption from '../Caption';
import {styles} from './styles';

type TPrimaryButtonSmall = {
  text: string;
  onPress: () => void;
};

const PrimaryButtonSmall: React.FC<TPrimaryButtonSmall> = ({text, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Caption text={text} styling={styles.captionText} />
    </Pressable>
  );
};

export default PrimaryButtonSmall;

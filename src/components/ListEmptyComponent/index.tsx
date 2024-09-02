import React, {useEffect} from 'react';
import {useState} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import BodyText from '../BodyText';
import {APP_TEXTS} from '../../constants';
import {getNormalizedVerticalSizeWithPlatformOffset} from '../../utils/scaling';

type TListEmptyComponent = {
  styling?: ViewStyle;
};

export const ListEmptyComponent: React.FC<TListEmptyComponent> = ({
  styling,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 2000);
  }, []);

  return (
    <View style={[styles.container, styling]}>
      {isVisible ? <BodyText text={APP_TEXTS.NO_ITEMS} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: getNormalizedVerticalSizeWithPlatformOffset(230),
  },
});

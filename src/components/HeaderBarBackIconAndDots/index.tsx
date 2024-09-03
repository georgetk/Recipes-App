import React, {FC} from 'react';
import {HeaderBarContainer} from '../HeaderBarContainer';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {APP_COLORS} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';

export const HeaderBarBackIconAndDots: FC = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <HeaderBarContainer>
      <Pressable onPress={handleBack}>
        <MaterialIcons name="arrow-back" color={APP_COLORS.BLACK} size={24} />
      </Pressable>
      <MaterialCommunityIcons
        name="dots-horizontal"
        color={APP_COLORS.BLACK}
        size={24}
      />
    </HeaderBarContainer>
  );
};

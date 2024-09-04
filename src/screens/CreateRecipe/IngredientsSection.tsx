import React from 'react';
import {InputField, Title, VerticalSeparator} from '../../components';
import {APP_COLORS, APP_TEXTS} from '../../constants';
import {Pressable, View} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {styles} from './styles';

export const IngredientsSection: React.FC = () => {
  return (
    <>
      <VerticalSeparator />
      <Title text={APP_TEXTS.INGREDIENTS} />
      <VerticalSeparator />

      <View style={styles.inoutFieldsContainer}>
        <InputField styling={{width: '50%'}} />
        <InputField styling={{width: '30%'}} />
        <Pressable>
          <SimpleLineIcons name="minus" color={APP_COLORS.BLACK} size={25} />
        </Pressable>
      </View>
    </>
  );
};

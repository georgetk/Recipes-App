import React from 'react';
import {
  BoxContainerForCreateAndDetails,
  InputField,
  VerticalSeparator,
} from '../../components';
import {APP_COLORS, APP_TEXTS} from '../../constants';
import {styles} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

export const ServesAndTime: React.FC = () => (
  <>
    <BoxContainerForCreateAndDetails
      text={APP_TEXTS.SERVES}
      leftItem={
        <Fontisto name="persons" color={APP_COLORS.PRIMARY_COLOR} size={32} />
      }
      rightItem={
        <InputField
          placeholder={''}
          styling={styles.servesTextContainer}
          textStyle={styles.servesTextStyle}
          keyboardType={'number-pad'}
        />
      }
    />

    <VerticalSeparator />

    <BoxContainerForCreateAndDetails
      text={APP_TEXTS.COOK_TIME}
      leftItem={
        <MaterialCommunityIcons
          name="clock-time-four"
          color={APP_COLORS.PRIMARY_COLOR}
          size={32}
        />
      }
      rightItem={
        <InputField
          placeholder={''}
          styling={styles.servesTextContainer}
          textStyle={styles.servesTextStyle}
          keyboardType={'number-pad'}
        />
      }
    />
  </>
);

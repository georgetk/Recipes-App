import React from 'react';
import {
  BodyText,
  ContainerWithHorizontalMargin,
  HeaderBarContainer,
  LargeTitle,
  MainViewContainer,
  SecondaryButton,
  Title,
} from '../../components';
import {APP_COLORS, APP_TEXTS} from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {View} from 'react-native';
import {styles} from './styles';

export const MyProfile: React.FC = () => {
  return (
    <MainViewContainer>
      <ContainerWithHorizontalMargin setFlex>
        <HeaderBarContainer>
          <LargeTitle text={APP_TEXTS.MY_PROFILE} />
          <View style={styles.headerIconsContainer}>
            <Ionicons name="moon-outline" size={24} color={APP_COLORS.BLACK} />
            <MaterialCommunityIcons
              name="dots-horizontal"
              color={APP_COLORS.BLACK}
              size={24}
            />
          </View>
        </HeaderBarContainer>

        <View style={styles.profileImageAndButtonContainer}>
          <View style={styles.imageContainer}>
            <MaterialCommunityIcons
              name="account-outline"
              size={40}
              color={APP_COLORS.BLACK}
            />
          </View>
          <SecondaryButton
            text={APP_TEXTS.EDIT_PROFILE}
            styling={styles.editProfileButton}
          />
        </View>

        <Title text={APP_TEXTS.USER_NAME} />

        <BodyText text={APP_TEXTS.USER_INTRO} styling={styles.userIntroText} />
      </ContainerWithHorizontalMargin>
    </MainViewContainer>
  );
};

import React from 'react';
import {
  ContainerWithHorizontalMargin,
  HeaderBarBackIconAndDots,
  InputField,
  LargeTitle,
  MainViewContainer,
  PrimaryButtonLarge,
  VerticalSeparator,
} from '../../components';
import {APP_COLORS, APP_TEXTS} from '../../constants';
import {styles} from './styles';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ServesAndTime} from './ServesAndTime';
import {IngredientsSection} from './IngredientsSection';
import {KeyboardAwareScrollView} from 'react-native-keyboard-controller';

const CreateRecipe: React.FC = () => {
  return (
    <MainViewContainer>
      <ContainerWithHorizontalMargin>
        <HeaderBarBackIconAndDots />
      </ContainerWithHorizontalMargin>
      <KeyboardAwareScrollView bottomOffset={50}>
        <ContainerWithHorizontalMargin>
          <LargeTitle
            text={APP_TEXTS.CREATE_RECIPE}
            styling={styles.titleText}
          />

          <View style={styles.imageContainer}>
            <MaterialCommunityIcons
              name="food-variant"
              color={APP_COLORS.PRIMARY_COLOR}
              size={32}
            />
          </View>

          <InputField
            placeholder={APP_TEXTS.ENTER_RECIPE_NAME}
            styling={styles.inputField}
          />

          <ServesAndTime />

          <IngredientsSection />

          <VerticalSeparator />

          <PrimaryButtonLarge
            text={APP_TEXTS.SAVE_MY_RECIPES}
            onPress={() => {}}
          />
        </ContainerWithHorizontalMargin>
      </KeyboardAwareScrollView>
    </MainViewContainer>
  );
};

export default CreateRecipe;

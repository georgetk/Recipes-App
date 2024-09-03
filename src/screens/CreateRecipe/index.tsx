import React from 'react';
import {
  ContainerWithHorizontalMargin,
  HeaderBarBackIconAndDots,
  LargeTitle,
  MainViewContainer,
} from '../../components';
import {APP_TEXTS} from '../../constants';
import { styles } from './styles';

const CreateRecipe: React.FC = () => {
  return (
    <MainViewContainer>
      <ContainerWithHorizontalMargin setFlex>
        <HeaderBarBackIconAndDots />
        <LargeTitle text={APP_TEXTS.CREATE_RECIPE}  styling={styles.titleText} />
      </ContainerWithHorizontalMargin>
    </MainViewContainer>
  );
};

export default CreateRecipe;

import React from 'react';
import {
  ContainerWithHorizontalMargin,
  LargeTitle,
  InputField,
  Title,
  MainScrollContainer,
  BottomSpacer,
} from '../../components';
import {APP_TEXTS} from '../../constants';
import {styles} from './styles';
import {TrendingNowList} from './TrendingNowList';
import {PopularCategory} from './PopularCategory';
import MainViewContainer from '../../components/MainViewContainer';

const Home: React.FC = () => {
  return (
    <MainViewContainer>
      <ContainerWithHorizontalMargin>
        <LargeTitle text={APP_TEXTS.GREETING} styling={styles.greetingText} />
        <InputField
          placeholder={APP_TEXTS.SEARCH_RECIPES}
          isIconShown={true}
          styling={styles.searchBar}
        />
      </ContainerWithHorizontalMargin>

      <MainScrollContainer>
        <ContainerWithHorizontalMargin>
          <Title text={APP_TEXTS.TRENDING_NOW} />
        </ContainerWithHorizontalMargin>

        <TrendingNowList />

        <ContainerWithHorizontalMargin>
          <Title text={APP_TEXTS.POPULAR_CATEGORY} />
        </ContainerWithHorizontalMargin>

        <PopularCategory />

        <BottomSpacer />
      </MainScrollContainer>
    </MainViewContainer>
  );
};

export default Home;

import React from 'react';
import {
  ContainerWithHorizontalMargin,
  LargeTitle,
  MainContainer,
  InputField,
  Title,
} from '../../components';
import {APP_TEXTS} from '../../constants';
import {styles} from './styles';
import {TrendingNowList} from './TrendingNowList';
import {ScrollView} from 'react-native';
import {PopularCategoryList} from './PopularCategoryList';

const Home: React.FC = () => {
  return (
    <MainContainer>
      <ScrollView>
        <ContainerWithHorizontalMargin>
          <LargeTitle text={APP_TEXTS.GREETING} styling={styles.greetingText} />
          <InputField
            placeholder={APP_TEXTS.SEARCH_RECIPES}
            isIconShown={true}
            styling={styles.searchBar}
          />
          <Title text={APP_TEXTS.TRENDING_NOW} />
        </ContainerWithHorizontalMargin>

        <TrendingNowList />

        <ContainerWithHorizontalMargin>
          <Title text={APP_TEXTS.POPULAR_CATEGORY} />
        </ContainerWithHorizontalMargin>

        <PopularCategoryList />
      </ScrollView>
    </MainContainer>
  );
};

export default Home;

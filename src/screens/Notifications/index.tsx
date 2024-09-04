import React, {useEffect, useState} from 'react';
import {
  BodyText,
  BoxContainer,
  Caption,
  ContainerWithHorizontalMargin,
  HeaderBarContainer,
  LargeTitle,
  MainViewContainer,
} from '../../components';
import {APP_COLORS, APP_TEXTS, REACT_QUERY_KEYS} from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

import {styles} from './styles';
import {Pressable, View} from 'react-native';
import {getRandomRecipe} from '../../api';
import {useQuery} from '@tanstack/react-query';
import {useNavigateToRecipeDetails} from '../../hooks';
import {useIsFocused} from '@react-navigation/native';

export const Notifications: React.FC = () => {
  const [startFetching, setStartFetching] = useState(false);
  const isFocused = useIsFocused();
  const handleNavigation = useNavigateToRecipeDetails();

  useEffect(() => {
    if (isFocused) {
      setStartFetching(false);
    }
  }, [isFocused]);

  const query = useQuery({
    queryKey: [REACT_QUERY_KEYS.RANDOM_RECIPE],
    queryFn: getRandomRecipe,
    enabled: startFetching,
  });

  useEffect(() => {
    if (query.data?.meals) {
      handleNavigation(query.data?.meals?.[0]?.idMeal ?? '');
    }
  }, [handleNavigation, query.data?.meals]);

  return (
    <MainViewContainer>
      <ContainerWithHorizontalMargin setFlex>
        <HeaderBarContainer>
          <LargeTitle text={APP_TEXTS.NOTIFICATIONS} />
          <Ionicons name="options-outline" size={24} />
        </HeaderBarContainer>

        <BodyText text={APP_TEXTS.TODAY} styling={styles.todayText} />

        <Pressable onPress={() => setStartFetching(true)}>
          <BoxContainer>
            <View style={styles.iconAndTextContainer}>
              <View style={styles.iconContainer}>
                <Octicons name="file" size={16} color={APP_COLORS.GREEN} />
              </View>
              <View>
                <Caption
                  text={APP_TEXTS.NEW_RECIPE}
                  styling={styles.boldText}
                />
                <Caption
                  text={APP_TEXTS.RANDOM_RECIPE}
                  styling={styles.textDescription}
                />
              </View>
            </View>
          </BoxContainer>
        </Pressable>
      </ContainerWithHorizontalMargin>
    </MainViewContainer>
  );
};

import React, {FC, memo} from 'react';
import {APP_TEXTS} from '../../constants';
import {Image, View} from 'react-native';
import {BodyText, Caption, SaveButton} from '../../components';
import {styles} from './styles';
import {useImagePreview} from '../../hooks/useImagePreview';
import {TMeal} from '../../types';

type TPopularRecipeItem = {
  item: TMeal;
};

const PopularRecipeItem: FC<TPopularRecipeItem> = ({item}) => {
  const getPreviewURL = useImagePreview();

  return (
    <View style={styles.popularRecipeContainer}>
      <View style={styles.bottomView}>
        <View style={styles.popularRecipeImageContainer}>
          <Image
            style={styles.popularRecipeImage}
            source={{uri: getPreviewURL(item?.strMealThumb)}}
          />
        </View>
        <View style={styles.bottomBodyContainer}>
          <BodyText text={item.strMeal} styling={styles.popularRecipeTitle} />
          <View style={styles.bottomBodyView}>
            <Caption text={APP_TEXTS.TIME} styling={styles.bottomTimeLabel} />

            <View style={styles.bottomTimeAndButtonContainer}>
              <Caption
                text={APP_TEXTS.STATIC_TIME}
                styling={styles.bottomTimeValueText}
              />
              <SaveButton item={item} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export const MemoizedPopularRecipeItem = memo(PopularRecipeItem);

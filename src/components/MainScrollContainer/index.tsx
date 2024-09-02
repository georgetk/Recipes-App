import React, {ReactNode} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {APP_COLORS} from '../../constants/colors';
import {useNotchHeight} from '../../hooks/useNotchHeight';

type TMainScrollContainer = {
  children: ReactNode;
  enableNotchHeight?: boolean;
};

const MainScrollContainer: React.FC<TMainScrollContainer> = ({
  children,
  enableNotchHeight = false,
}) => {
  const topHeight = useNotchHeight();

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={[
        styles.container,
        enableNotchHeight ? {paddingTop: topHeight} : {},
      ]}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: APP_COLORS.WHITE},
});

export default MainScrollContainer;

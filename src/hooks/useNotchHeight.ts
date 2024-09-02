import {Platform, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useMemo} from 'react';

export const useNotchHeight = (): number => {
  const insets = useSafeAreaInsets();

  return useMemo(() => {
    if (Platform.OS === 'android') {
      const defaultAndroidHeight = 30;
      const statusBarHeight = StatusBar.currentHeight || defaultAndroidHeight;
      return Math.max(statusBarHeight, defaultAndroidHeight);
    } else {
      const additionalHeight = 5;
      return insets.top + additionalHeight;
    }
  }, [insets.top]);
};

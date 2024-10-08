/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {APP_COLORS} from './src/constants';
import StackNavigator from './src/navigation/StackNavigator';
import {KeyboardProvider} from 'react-native-keyboard-controller';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <KeyboardProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider style={styles.container}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </QueryClientProvider>
    </KeyboardProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_COLORS.WHITE,
  },
});

export default App;

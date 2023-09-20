import { NativeBaseProvider } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home } from './src/screens/Home';
import { theme } from './src/nativeTheme';
const MainStack = createStackNavigator();
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
          <Home/>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}
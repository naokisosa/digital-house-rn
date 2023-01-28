import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Navigation from './src/navigation/Navigation';
import { store } from './src/store/index';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

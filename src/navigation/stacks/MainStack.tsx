import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ProductsStack from '../../modules/products/stack/index';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false, presentation: 'card', animation: 'slide_from_right' }}>
      {ProductsStack}
    </Stack.Navigator>
  );
};

export default MainStack;

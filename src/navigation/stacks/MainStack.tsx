import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ProductsStack from '../../modules/products/stack/index';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      {ProductsStack}
    </Stack.Navigator>
  );
};

export default MainStack;

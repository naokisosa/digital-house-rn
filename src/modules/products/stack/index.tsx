import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome/Welcome';
import ProductDetails from '../screens/ProductDetails/ProductDetails';

const Stack = createNativeStackNavigator();

enum Screens {
  Welcome = 'Welcome',
  ProductDetails = 'ProductDetails',
}

const ProductsStack = [
  <Stack.Screen key={Screens.Welcome} name={Screens.Welcome} component={Welcome} />,
  <Stack.Screen
    key={Screens.ProductDetails}
    name={Screens.ProductDetails}
    component={ProductDetails}
  />,
];

export type ProductsFlow = {
  Welcome: undefined;
  ProductDetails: undefined;
};

export default ProductsStack;

import React, { useCallback } from 'react';
import ProductDetailsUI from './ProductDetailsUI';
import { useGetAllProductsQuery } from '@services/product';
import { useMainNavigation, useMainRoute } from '@navigation/stacks/hooks';

const ProductDetails = () => {
  const {
    params: { id },
  } = useMainRoute<'ProductDetails'>();
  const navigation = useMainNavigation();

  const { product } = useGetAllProductsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      product: data?.find((product) => product.id === id),
    }),
  });

  const handlePressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return <ProductDetailsUI product={product} onPressBack={handlePressBack} />;
};

export default ProductDetails;

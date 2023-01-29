import React, { useCallback } from 'react';
import WelcomeUI from './WelcomeUI';
import { useProductList } from '../../hooks/useProductList';
import { useMainNavigation } from '../../../../navigation/stacks/hooks';

const Welcome = () => {
  const navigation = useMainNavigation();

  const {
    productsList,
    showAllProducts,
    showNotRedeemedProducts,
    showRedeemedProducts,
    totalPoints,
  } = useProductList();

  const handlePressWon = useCallback(() => {
    showRedeemedProducts();
  }, [showRedeemedProducts]);

  const handlePressSwapped = useCallback(() => {
    showNotRedeemedProducts();
  }, [showNotRedeemedProducts]);

  const handlePressAll = useCallback(() => {
    showAllProducts();
  }, [showAllProducts]);

  const handlePressProduct = useCallback(
    (id: string) => {
      navigation.navigate('ProductDetails', { id });
    },
    [navigation]
  );

  return (
    <WelcomeUI
      isShowingAll={productsList?.isShowingAll}
      onPressAll={handlePressAll}
      onPressProduct={handlePressProduct}
      onPressSwapped={handlePressSwapped}
      onPressWon={handlePressWon}
      products={productsList?.list}
      totalPoints={totalPoints}
    />
  );
};

export default Welcome;

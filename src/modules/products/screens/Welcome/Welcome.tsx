import React, { useCallback } from 'react';
import WelcomeUI from './WelcomeUI';
import { useProductList } from '../../hooks/useProductList';
import { useMainNavigation } from '../../../../navigation/stacks/hooks';

const Welcome = () => {
  const navigation = useMainNavigation();

  const month = new Date().toLocaleDateString('es-ES', { month: 'long' });

  const {
    isLoading,
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
      isLoading={isLoading}
      isShowingAll={productsList?.isShowingAll}
      month={month}
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

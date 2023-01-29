import React, { useCallback } from 'react';
import WelcomeUI from './WelcomeUI';
import { useProductList } from '../../hooks/useProductList';

const Welcome = () => {
  console.log('!!!');
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

  return (
    <WelcomeUI
      onPressSwapped={handlePressSwapped}
      onPressWon={handlePressWon}
      products={productsList?.list}
      totalPoints={totalPoints}
      isShowingAll={productsList?.isShowingAll}
      onPressAll={handlePressAll}
    />
  );
};

export default Welcome;

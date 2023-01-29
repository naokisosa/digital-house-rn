import { useGetAllProductsQuery } from '@services/product';
import { Product } from '@services/types';
import { useCallback, useEffect, useMemo, useState } from 'react';

type ReduceReturnType = {
  totalPoints: number;
  redeemedProducts: Product[];
  notRedeemedProducts: Product[];
};

type ProductList = {
  list: Product[];
  isShowingAll: boolean;
};

export const useProductList = () => {
  const { data } = useGetAllProductsQuery();
  const [productsList, setProductsList] = useState<ProductList>({
    list: [],
    isShowingAll: true,
  });

  const { totalPoints, redeemedProducts, notRedeemedProducts } = useMemo(() => {
    const initialValue = { totalPoints: 0, redeemedProducts: [], notRedeemedProducts: [] };
    if (data) {
      return data.reduce<ReduceReturnType>((accumulator, currentValue) => {
        if (currentValue.is_redemption) {
          accumulator.redeemedProducts.push(currentValue);
          accumulator.totalPoints += currentValue.points;
          return accumulator;
        }
        accumulator.notRedeemedProducts.push(currentValue);
        return accumulator;
      }, initialValue);
    }
    return initialValue;
  }, [data]);

  useEffect(() => {
    if (data) {
      setProductsList({ list: data, isShowingAll: true });
    }
  }, [data]);

  const showRedeemedProducts = useCallback(() => {
    setProductsList({ list: redeemedProducts, isShowingAll: false });
  }, [redeemedProducts]);

  const showNotRedeemedProducts = useCallback(() => {
    setProductsList({ list: notRedeemedProducts, isShowingAll: false });
  }, [notRedeemedProducts]);

  const showAllProducts = useCallback(() => {
    setProductsList({ list: data!, isShowingAll: true });
  }, [data]);

  return {
    productsList,
    showAllProducts,
    showNotRedeemedProducts,
    showRedeemedProducts,
    totalPoints,
  };
};

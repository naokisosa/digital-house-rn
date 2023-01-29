import { FlatList, StyleSheet, View } from 'react-native';
import React, { memo, useCallback } from 'react';
import { colors } from '@style';
import { BaseText } from '@components';
import ProductRow from '../ProductRow/ProductRow';
import { Product } from '@services/types';

interface Props {
  products?: Product[];
}

const UserMovements = ({ products }: Props) => {
  const keyExtractor = useCallback((item: Product) => {
    return item.id + item.createdAt;
  }, []);

  const renderItem = useCallback(({ item }: { item: Product }) => {
    return <ProductRow product={item} />;
  }, []);

  return (
    <>
      <BaseText style={styles.title}>TUS MOVIMIENTOS</BaseText>
      <View style={styles.card}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </>
  );
};

export default memo(UserMovements);

const styles = StyleSheet.create({
  title: {
    color: colors.gray,
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19.12,
    marginVertical: 20,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 7.56,
    paddingVertical: 20,
    flex: 1,
  },
  month: {
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 21.86,
    color: colors.white,
  },
  totalPoints: {
    fontWeight: '800',
    fontSize: 32,
    lineHeight: 43.71,
    color: colors.white,
    textAlign: 'center',
    marginTop: 7,
  },
  flatListContent: {
    marginVertical: -4,
  },
});

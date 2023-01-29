import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import React, { memo, useCallback } from 'react';
import { colors } from '@style';
import { BaseText } from '@components';
import ProductRow from '../ProductRow/ProductRow';
import { Product } from '@services/types';

interface Props {
  products?: Product[];
  onPress: (id: string) => void;
  isLoading?: boolean;
}

const UserMovements = ({ products, onPress, isLoading }: Props) => {
  const keyExtractor = useCallback((item: Product) => {
    return item.id + item.createdAt;
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: Product }) => {
      return <ProductRow product={item} onPress={() => onPress(item.id)} />;
    },
    [onPress]
  );

  const Content = useCallback(() => {
    if (isLoading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    );
  }, [isLoading, keyExtractor, products, renderItem]);

  return (
    <>
      <BaseText style={styles.title}>TUS MOVIMIENTOS</BaseText>
      <View style={styles.card}>
        <Content />
      </View>
    </>
  );
};

export default memo(UserMovements);

const styles = StyleSheet.create({
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
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

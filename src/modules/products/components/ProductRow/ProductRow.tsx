import { Image, Pressable, StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import { Product } from '@services/types';
import { BaseText } from '@components';
import { colors } from '@style';

interface Props {
  product?: Product;
  onPress: () => void;
}

const IMAGE_SIZE = 55;

const ProductRow = ({ product, onPress }: Props) => {
  const symbol = product?.is_redemption ? '+' : '-';

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{ uri: product?.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <BaseText style={styles.name}>{product?.product}</BaseText>
        <BaseText style={styles.createdAt}>{product?.createdAt}</BaseText>
      </View>
      <View>
        <BaseText style={styles.points}>
          <BaseText style={styles.symbol(product?.is_redemption)}>{symbol}</BaseText>
          {product?.points}
        </BaseText>
      </View>
    </Pressable>
  );
};

export default memo(ProductRow);

const styles = StyleSheet.create<any>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 11,
    flex: 1,
  },
  name: {
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19.12,
    marginBottom: 7,
  },
  createdAt: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16.39,
  },
  points: {
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 21.86,
  },
  symbol: (isRedemption: boolean) => ({
    color: isRedemption ? colors.green : colors.red,
  }),
});

import { Image, StyleSheet, View } from 'react-native';
import React, { useCallback } from 'react';
import { BaseText, Button, ViewContainer } from '@components';
import { colors } from '@style';
import { Product } from '@services/types';

const IMAGE_SIZE = 200;

interface Props {
  onPressBack: () => void;
  product?: Product;
}

const ProductDetailsUI = ({ onPressBack, product }: Props) => {
  const Header = useCallback(() => {
    return (
      <View style={styles.header}>
        <BaseText style={styles.title}>{product?.product}</BaseText>
      </View>
    );
  }, [product?.product]);

  return (
    <ViewContainer header={<Header />} style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: product?.image }} style={styles.image} />
      </View>
      <View style={styles.content}>
        <BaseText style={styles.subtitle}>Detalles del producto:</BaseText>
        <BaseText style={styles.createdAt}>{product?.createdAt}</BaseText>
        <BaseText style={styles.subtitle}>Con esta compra acumulaste:</BaseText>
        <BaseText style={styles.points}>{`${product?.points} puntos`}</BaseText>
      </View>
      <Button title="Aceptar" onPress={onPressBack} />
    </ViewContainer>
  );
};

export default ProductDetailsUI;

const styles = StyleSheet.create({
  header: {
    height: 150,
    backgroundColor: colors.secondary,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: '800',
    fontSize: 24,
    marginBottom: 24,
  },
  container: {
    paddingTop: 19,
  },
  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
  },
  content: {
    flex: 1,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.gray,
    marginBottom: 19,
  },
  createdAt: {
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 20,
  },
  points: {
    fontSize: 24,
    fontWeight: '800',
    marginTop: 13,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 350,
    marginBottom: 32,
  },
});

import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { BaseText, Button, Image, ViewContainer } from '@components';
import { colors } from '@style';
import { Product } from '@services/types';
import Header from '@modules/products/components/Header/Header';
import { formatDate } from '@utils';

interface Props {
  onPressBack: () => void;
  product?: Product;
}

const ProductDetailsUI = ({ onPressBack, product }: Props) => {
  return (
    <ViewContainer header={<Header title={product?.product} />} style={styles.container}>
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}>
        <View style={[styles.card, styles.shadow]}>
          <Image size="big" source={{ uri: product?.image }} />
        </View>
        <BaseText style={styles.subtitle}>Detalles del producto:</BaseText>
        <BaseText style={styles.createdAt}>{`Comprado el ${formatDate(
          product?.createdAt
        )}`}</BaseText>
        <BaseText style={styles.subtitle}>Con esta compra acumulaste:</BaseText>
        <BaseText style={styles.points}>{`${product?.points} puntos`}</BaseText>
      </ScrollView>
      <Button title="Aceptar" onPress={onPressBack} />
    </ViewContainer>
  );
};

export default ProductDetailsUI;

const styles = StyleSheet.create({
  container: {
    paddingTop: 19,
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
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,

    elevation: 2,
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

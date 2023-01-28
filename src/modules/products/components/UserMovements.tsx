import { StyleSheet, View } from 'react-native';
import React from 'react';
import { colors } from '@style';
import { BaseText } from '@components';

const UserMovements = () => {
  return (
    <>
      <BaseText style={styles.title}>TUS MOVIMIENTOS</BaseText>
      <View style={styles.card}></View>
    </>
  );
};

export default UserMovements;

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
});

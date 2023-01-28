import { StyleSheet, View } from 'react-native';
import React from 'react';
import { BaseText } from '@components';
import { colors } from '@style';

interface Props {
  month: string;
  totalPoints: string;
}

const UserPoints = ({ month, totalPoints }: Props) => {
  return (
    <>
      <BaseText style={styles.title}>TUS PUNTOS</BaseText>
      <View style={styles.card}>
        <BaseText style={styles.month}>{month}</BaseText>
        <BaseText style={styles.totalPoints}>{totalPoints}</BaseText>
      </View>
    </>
  );
};

export default UserPoints;

const styles = StyleSheet.create({
  title: {
    color: colors.gray,
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19.12,
    marginVertical: 20,
  },
  card: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingHorizontal: 19,
    paddingVertical: 21,
    height: 143,
    marginHorizontal: 34,
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

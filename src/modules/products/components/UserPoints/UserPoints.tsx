import { StyleSheet, View } from 'react-native';
import React, { memo, useCallback } from 'react';
import { BaseText, Loader } from '@components';
import { colors } from '@style';

interface Props {
  month: string;
  totalPoints?: number;
  isLoading?: boolean;
}

const UserPoints = ({ month, totalPoints = 0, isLoading = false }: Props) => {
  const Content = useCallback(() => {
    if (isLoading) {
      return <Loader />;
    }
    return (
      <>
        <BaseText style={styles.month}>{month}</BaseText>
        <BaseText style={styles.totalPoints}>{`${totalPoints.toLocaleString(
          'en-US'
        )} pts`}</BaseText>
      </>
    );
  }, [isLoading, month, totalPoints]);

  return (
    <>
      <BaseText style={styles.title}>TUS PUNTOS</BaseText>
      <View style={[styles.card, styles.shadow]}>
        <Content />
      </View>
    </>
  );
};

export default memo(UserPoints);

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
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,

    elevation: 19,
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

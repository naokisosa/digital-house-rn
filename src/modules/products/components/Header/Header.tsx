import { StyleSheet, View } from 'react-native';
import React from 'react';
import { BaseText } from '@components';
import { colors } from '@style';

interface Props {
  title?: string;
}

const Header = ({ title }: Props) => {
  return (
    <View style={styles.header}>
      <BaseText style={styles.title}>{title}</BaseText>
    </View>
  );
};

export default Header;

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
});

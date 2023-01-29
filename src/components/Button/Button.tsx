import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import React from 'react';
import BaseText from '@components/BaseText/BaseText';
import { colors } from '@style';

interface Props {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

const Button = ({ onPress, title, style }: Props) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <BaseText style={styles.title}>{title}</BaseText>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '800',
    color: colors.white,
    fontSize: 16,
    lineHeight: 21.86,
  },
});

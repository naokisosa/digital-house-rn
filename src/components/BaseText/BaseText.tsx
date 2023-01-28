import { StyleSheet, Text as NativeText, TextProps as NativeTextProps } from 'react-native';
import React from 'react';

interface Props extends NativeTextProps {}

const BaseText = ({ children, style, ...rest }: Props) => {
  return (
    <NativeText style={[styles.base, style]} {...rest}>
      {children}
    </NativeText>
  );
};

export default BaseText;

const styles = StyleSheet.create({
  base: {
    fontFamily: 'Avenir',
  },
});

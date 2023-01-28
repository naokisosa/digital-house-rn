import { StyleSheet, Text as NativeText, TextProps as NativeTextProps } from 'react-native';
import React from 'react';

interface Props extends NativeTextProps {}

const BaseText = ({ children, ...rest }: Props) => {
  return (
    <NativeText style={styles.baseText} {...rest}>
      {children}
    </NativeText>
  );
};

export default BaseText;

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Avenir',
  },
});

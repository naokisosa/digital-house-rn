import { StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@style';

interface Props {
  children?: React.ReactNode;
  edges?: Edge[];
  style?: ViewStyle;
  header?: React.ReactNode;
}

const DEFAULT_EDGES: Edge[] = ['bottom', 'left', 'right', 'top'];
const HEADER_EDGES: Edge[] = ['bottom', 'left', 'right'];

const ViewContainer = ({ children, edges = DEFAULT_EDGES, style, header }: Props) => {
  return (
    <>
      {header}
      <SafeAreaView style={[styles.container, style]} edges={header ? HEADER_EDGES : edges}>
        {children}
      </SafeAreaView>
    </>
  );
};

export default ViewContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: 20,
  },
});

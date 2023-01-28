import { StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@style';

interface Props {
  children?: React.ReactNode;
  edges?: Edge[];
  style?: ViewStyle;
}

const DEFAULT_EDGES: Edge[] = ['bottom', 'left', 'right', 'top'];

const ViewContainer = ({ children, edges = DEFAULT_EDGES, style }: Props) => {
  return (
    <SafeAreaView style={[styles.container, style]} edges={edges}>
      {children}
    </SafeAreaView>
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

import { StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import FastImage, { Source } from 'react-native-fast-image';

const IMAGE_PLACEHOLDER = require('@assets/placeholder.png');

type ImageSizes = 'big' | 'small';

interface Props {
  size?: ImageSizes;
  source?: Source;
  style?: ViewStyle;
}

const IMAGE_SIZES = new Map<ImageSizes, number>([
  ['big', 200],
  ['small', 55],
]);

const Image = ({ size = 'big', source = IMAGE_PLACEHOLDER, style }: Props) => {
  return (
    <FastImage
      source={source}
      style={[styles.image(size), style]}
      defaultSource={IMAGE_PLACEHOLDER}
    />
  );
};

export default Image;

const styles = StyleSheet.create<any>({
  image: (size: ImageSizes) => ({
    width: IMAGE_SIZES.get(size),
    height: IMAGE_SIZES.get(size),
  }),
});

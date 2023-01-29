import { StyleSheet, Image as NativeImage, ImageSourcePropType, ViewStyle } from 'react-native';
import React from 'react';

const IMAGE_PLACEHOLDER = require('@assets/placeholder.png');

type ImageSizes = 'big' | 'small';

interface Props {
  size?: ImageSizes;
  source?: ImageSourcePropType;
  style?: ViewStyle;
}

const IMAGE_SIZES = new Map<ImageSizes, number>([
  ['big', 200],
  ['small', 55],
]);

const Image = ({ size = 'big', source = IMAGE_PLACEHOLDER, style }: Props) => {
  return <NativeImage source={source} style={[styles.image(size), style]} />;
};

export default Image;

const styles = StyleSheet.create<any>({
  image: (size: ImageSizes) => ({
    width: IMAGE_SIZES.get(size),
    height: IMAGE_SIZES.get(size),
  }),
});

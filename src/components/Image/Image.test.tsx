import 'react-native';
import React from 'react';

import Image from './Image';
import renderer from 'react-test-renderer';
import { SINGLE_PRODUCT } from '@mocks';

describe('Test Image component', () => {
  it('renders correctly with default values', () => {
    const { toJSON } = renderer.create(<Image />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly with size="big"', () => {
    const { toJSON } = renderer.create(<Image size="big" />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly with size="small"', () => {
    const { toJSON } = renderer.create(<Image size="small" />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly when providing external uri', () => {
    const { toJSON } = renderer.create(<Image source={{ uri: SINGLE_PRODUCT.image }} />);
    expect(toJSON()).toMatchSnapshot();
  });
});

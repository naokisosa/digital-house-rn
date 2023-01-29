import 'react-native';
import React from 'react';

import ProductDetailsUI from './ProductDetailsUI';
import renderer from 'react-test-renderer';
import { SINGLE_PRODUCT } from '@mocks';

describe('Test ProductDetails screen', () => {
  it('renders correctly with mock product', () => {
    const { toJSON } = renderer.create(
      <ProductDetailsUI product={SINGLE_PRODUCT} onPressBack={jest.fn} />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});

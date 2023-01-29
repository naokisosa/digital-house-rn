import 'react-native';
import React from 'react';

import Header from './Header';
import renderer from 'react-test-renderer';
import { SINGLE_PRODUCT } from '@mocks';

describe('Test Header component', () => {
  it('renders correctly with title', () => {
    const { toJSON } = renderer.create(<Header title={SINGLE_PRODUCT.product} />);
    expect(toJSON()).toMatchSnapshot();
  });
});

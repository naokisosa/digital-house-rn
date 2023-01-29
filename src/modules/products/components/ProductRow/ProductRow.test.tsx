import 'react-native';
import React from 'react';

import ProductRow from './ProductRow';
import renderer from 'react-test-renderer';
import { SINGLE_PRODUCT } from '@mocks';

describe('Test ProductRow component', () => {
  it('renders correctly with mock product', () => {
    const { toJSON } = renderer.create(<ProductRow product={SINGLE_PRODUCT} onPress={jest.fn} />);
    expect(toJSON()).toMatchSnapshot();
  });
});

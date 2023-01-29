import 'react-native';
import React from 'react';

import UserMovements from './UserMovements';
import renderer from 'react-test-renderer';
import { PRODUCTS_MOCK } from '@mocks';

describe('Test UserMovements component', () => {
  it('renders correctly with loading prop', () => {
    const { toJSON } = renderer.create(<UserMovements isLoading={true} onPress={jest.fn} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly with producst mock', () => {
    const { toJSON } = renderer.create(
      <UserMovements products={PRODUCTS_MOCK} onPress={jest.fn} />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});

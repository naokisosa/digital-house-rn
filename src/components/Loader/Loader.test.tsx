import 'react-native';
import React from 'react';

import Loader from './Loader';
import renderer from 'react-test-renderer';

describe('Test Loader component', () => {
  it('renders correctly', () => {
    const { toJSON } = renderer.create(<Loader />);
    expect(toJSON()).toMatchSnapshot();
  });
});

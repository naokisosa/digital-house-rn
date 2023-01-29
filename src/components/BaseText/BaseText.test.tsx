import 'react-native';
import React from 'react';

import BaseText from './BaseText';
import renderer from 'react-test-renderer';

describe('Test BaseText component', () => {
  it('renders correctly', () => {
    const { toJSON } = renderer.create(<BaseText>Mock</BaseText>);
    expect(toJSON()).toMatchSnapshot();
  });
});

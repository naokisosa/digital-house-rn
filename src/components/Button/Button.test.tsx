import 'react-native';
import React from 'react';

import Button from './Button';
import renderer from 'react-test-renderer';

describe('Test Button component', () => {
  it('renders correctly with title', () => {
    const { toJSON } = renderer.create(<Button title="Mock" onPress={jest.fn} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly with disabled', () => {
    const { toJSON } = renderer.create(<Button title="Mock" onPress={jest.fn} disabled />);
    expect(toJSON()).toMatchSnapshot();
  });
});

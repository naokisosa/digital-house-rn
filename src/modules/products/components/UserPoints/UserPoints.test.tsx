import 'react-native';
import React from 'react';

import UserPoints from './UserPoints';
import renderer from 'react-test-renderer';

describe('Test UserPoints component', () => {
  it('renders correctly with loading prop', () => {
    const { toJSON } = renderer.create(<UserPoints isLoading={true} month={'Enero'} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly with totalPoints prop', () => {
    const { toJSON } = renderer.create(<UserPoints totalPoints={10000} month={'Enero'} />);
    expect(toJSON()).toMatchSnapshot();
  });
});

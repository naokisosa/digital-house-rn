import 'react-native';
import React from 'react';

import ViewContainer from './ViewContainer';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';

describe('Test ViewContainer component', () => {
  it('renders correctly with children', () => {
    const { toJSON } = renderer.create(
      <ViewContainer>
        <Text>Mock</Text>
      </ViewContainer>
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly with children and header', () => {
    const { toJSON } = renderer.create(
      <ViewContainer header={<Text>Header</Text>}>
        <Text>Mock</Text>
      </ViewContainer>
    );
    expect(toJSON()).toMatchSnapshot();
  });
});

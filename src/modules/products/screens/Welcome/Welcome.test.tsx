import 'react-native';
import React from 'react';

import WelcomeUI from './WelcomeUI';
import renderer from 'react-test-renderer';
import { PRODUCTS_MOCK } from '@mocks';

describe('Test Welcome screen', () => {
  it('renders correctly with loading prop', () => {
    const { toJSON } = renderer.create(
      <WelcomeUI
        isLoading={true}
        isShowingAll={true}
        month="Enero"
        onPressAll={jest.fn}
        onPressProduct={jest.fn}
        onPressSwapped={jest.fn}
        onPressWon={jest.fn}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly with products and totalPoints prop', () => {
    const { toJSON } = renderer.create(
      <WelcomeUI
        isLoading={false}
        products={PRODUCTS_MOCK}
        totalPoints={10000}
        isShowingAll={true}
        month="Enero"
        onPressAll={jest.fn}
        onPressProduct={jest.fn}
        onPressSwapped={jest.fn}
        onPressWon={jest.fn}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly with products, totalPoints and isShowingAll prop', () => {
    const { toJSON } = renderer.create(
      <WelcomeUI
        isLoading={false}
        products={PRODUCTS_MOCK}
        totalPoints={10000}
        isShowingAll={false}
        month="Enero"
        onPressAll={jest.fn}
        onPressProduct={jest.fn}
        onPressSwapped={jest.fn}
        onPressWon={jest.fn}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});

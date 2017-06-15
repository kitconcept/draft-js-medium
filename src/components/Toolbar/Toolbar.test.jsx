import React from 'react';
import renderer from 'react-test-renderer';

import Toolbar from './Toolbar';

jest.mock('../Button/Button', () => jest.fn(() => <div />));

describe('Toolbar', () => {
  it('renders a toolbar component', () => {
    const component = renderer.create(<Toolbar />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

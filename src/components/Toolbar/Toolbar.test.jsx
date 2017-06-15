import React from 'react';
import renderer from 'react-test-renderer';

import Toolbar from './Toolbar';

jest.mock('../Button/Button', () => jest.fn(() => <div className="button" />));
jest.mock('../StyleButton/StyleButton', () =>
  jest.fn(() => <div className="style-button" />),
);

describe('Toolbar', () => {
  it('renders a toolbar component', () => {
    const component = renderer.create(
      <Toolbar onToggleInline={() => {}} onToggleLink={() => {}} selection />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

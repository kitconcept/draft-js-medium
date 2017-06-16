import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';

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

  it('renders an empty span when no selection is specified', () => {
    const component = renderer.create(
      <Toolbar
        onToggleInline={() => {}}
        onToggleLink={() => {}}
        selection={false}
      />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  /*
  it('repositions the toolbar on update', () => {
    const wrapper = render(
      <Toolbar
        onToggleInline={() => {}}
        onToggleLink={() => {}}
        selection={false}
      />,
    );
    wrapper.setProps({ selection: true });
  });
  */
});

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import StyleButton from './StyleButton';

jest.mock('../Button/Button', () =>
  jest.fn(({ onClick }) => <button onClick={onClick} />),
);

describe('StyleButton', () => {
  it('renders a style button component', () => {
    const component = renderer.create(
      <StyleButton icon="bold" style="BOLD" onToggle={() => {}} />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('calls the onClick handler when button is pressed', () => {
    const handler = jest.fn();
    const wrapper = mount(
      <StyleButton icon="bold" style="BOLD" onToggle={handler} />,
    );
    wrapper.simulate('click');
    expect(handler).toBeCalled();
  });
});

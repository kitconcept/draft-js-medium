import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Button from './Button';

describe('Button', () => {
  it('renders a button component', () => {
    const component = renderer.create(
      <Button icon="bold" onClick={() => {}} />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('calls the onClick handler when button is pressed', () => {
    const handler = jest.fn();
    const wrapper = mount(<Button icon="bold" onClick={handler} />);
    wrapper.simulate('mousedown');
    expect(handler).toBeCalled();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

describe('Button', () => {
  it('renders a button component', () => {
    const component = renderer.create(
      <Button icon="bold" onClick={() => {}} />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

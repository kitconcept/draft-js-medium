import React from 'react';
import renderer from 'react-test-renderer';

import StyleButton from './StyleButton';

jest.mock('../Button/Button', () => jest.fn(() => <div className="button" />));

describe('StyleButton', () => {
  it('renders a style button component', () => {
    const component = renderer.create(
      <StyleButton icon="bold" style="BOLD" onToggle={() => {}} />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

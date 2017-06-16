import React from 'react';
import { shallow } from 'enzyme';

import Editor from './Editor';

jest.mock('../Toolbar/Toolbar', () =>
  jest.fn(() => <div className="toolbar" />),
);

describe('Editor', () => {
  it('renders an editor component', () => {
    expect(shallow(<Editor />).is('.editor')).toBe(true);
  });
});

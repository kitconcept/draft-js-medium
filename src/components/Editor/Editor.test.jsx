import React from 'react';
import { shallow, mount } from 'enzyme';

import Editor from './Editor';

describe('Editor', () => {
  it('renders an editor component', () => {
    expect(shallow(<Editor />).is('.editor')).toBe(true);
  });
});

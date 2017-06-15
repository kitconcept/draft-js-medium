// Application entrypoint.

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import { Editor } from '../src';

ReactDOM.render(
  <Editor content="<p>This is a <b>test</b></p>" />,
  document.getElementById('react-root'),
);

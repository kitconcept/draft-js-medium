/**
 * Editor component.
 * @module components/Editor
 */

import React, { Component } from 'react';
import { Editor as DraftEditor, EditorState } from 'draft-js';

import Toolbar from '../Toolbar/Toolbar';

/**
 * Editor component class.
 * @class Editor
 * @extends Component
 */
export default class Editor extends Component {
  /**
   * Construcor
   * @param {Object} props Properties.
   * @constructs
   */
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = this.onChange.bind(this);
  }

  /**
   * On change method.
   * @function onChange
   * @param {Object} editorState New editor state.
   * @returns {undefined}
   */
  onChange(editorState) {
    this.setState({ editorState });
  }

  /**
   * Render method.
   * @function render
   * @returns {string} Markup of the container.
   */
  render() {
    return (
      <div className="editor">
        <Toolbar />
        <DraftEditor
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

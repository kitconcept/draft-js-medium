/**
 * Editor component.
 * @module components/Editor
 */

import React, { Component } from 'react';
import { Editor as DraftEditor, EditorState, RichUtils } from 'draft-js';

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
    this.onToggleInline = this.onToggleInline.bind(this);
    this.onToggleLink = this.onToggleLink.bind(this);
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
   * Toggle inline style.
   * @function onToggleInline
   * @param {string} inlineStyle Inline style to toggle.
   * @returns {undefined}
   */
  onToggleInline(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle),
    );
  }

  /**
   * Toggle link.
   * @function onToggleLink
   * @returns {undefined}
   */
  onToggleLink() {}

  /**
   * Render method.
   * @function render
   * @returns {string} Markup of the container.
   */
  render() {
    return (
      <div className="editor">
        <Toolbar
          onToggleInline={this.onToggleInline}
          onToggleLink={this.onToggleLink}
        />
        <DraftEditor
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

/**
 * Editor component.
 * @module components/Editor
 */

import React, { Component } from 'react';
import {
  convertFromHTML,
  Editor as DraftEditor,
  EditorState,
  ContentState,
  RichUtils,
} from 'draft-js';
import PropTypes from 'prop-types';

import Toolbar from '../Toolbar/Toolbar';

/**
 * Editor component class.
 * @class Editor
 * @extends Component
 */
export default class Editor extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    content: PropTypes.string,
  };

  /**
   * Default properties
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    content: '',
  };

  /**
   * Construcor
   * @param {Object} props Properties.
   * @constructs
   */
  constructor(props) {
    super(props);
    this.state = {
      editorState: this.props.content !== ''
        ? EditorState.createWithContent(
            ContentState.createFromBlockArray(
              convertFromHTML(this.props.content),
            ),
          )
        : EditorState.createEmpty(),
    };
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
          selection={!this.state.editorState.getSelection().isCollapsed()}
        />
        <DraftEditor
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

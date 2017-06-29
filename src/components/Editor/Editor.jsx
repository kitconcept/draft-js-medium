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
    onChange: PropTypes.func,
  };

  /**
   * Default properties
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    content: '',
    onChange: undefined,
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
   * @param {function} callback Callback function.
   * @returns {undefined}
   */
  onChange(editorState, callback) {
    if (this.props.onChange) {
      this.props.onChange(editorState);
    }
    this.setState({ editorState }, callback);
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
   * @param {string} link Link value
   * @returns {undefined}
   */
  onToggleLink(link) {
    let editorState = this.state.editorState;
    const selection = editorState.getSelection();
    const content = editorState.getCurrentContent();
    let entityKey = null;
    let newLink = link;
    if (link !== '') {
      if (link.indexOf('http') === -1) {
        if (link.indexOf('@') >= 0) {
          newLink = `mailto:${newLink}`;
        } else {
          newLink = `http://${newLink}`;
        }
      }
      const contentWithEntity = content.createEntity('LINK', 'MUTABLE', {
        url: newLink,
      });
      editorState = EditorState.push(
        editorState,
        contentWithEntity,
        'create-entity',
      );
      entityKey = contentWithEntity.getLastCreatedEntityKey();
    }
    this.onChange(
      RichUtils.toggleLink(editorState, selection, entityKey),
      this.editorNode.focus(),
    );
  }

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
          ref={node => {
            this.editorNode = node;
          }}
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

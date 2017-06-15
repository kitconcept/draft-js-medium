/**
 * Toolbar component.
 * @module components/Toolbar
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import StyleButton from '../StyleButton/StyleButton';

/**
 * Toolbar component class.
 * @class Toolbar
 * @extends Component
 */
export default class Toolbar extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    onToggleInline: PropTypes.func.isRequired,
    onToggleLink: PropTypes.func.isRequired,
    selection: PropTypes.bool.isRequired,
  };

  /**
   * Component did update handler.
   * @function componentDidUpdate
   * @returns {undefined}
   */
  componentDidUpdate() {
    if (!this.props.selection) {
      return;
    }

    const selectionRect = window
      .getSelection()
      .getRangeAt(0)
      .getBoundingClientRect();

    const toolbarNode = ReactDOM.findDOMNode(this);
    const toolbarRect = toolbarNode.getBoundingClientRect();

    toolbarNode.style.top = `${selectionRect.top - toolbarRect.height - 6}px`;
    toolbarNode.style.left = `${selectionRect.left +
      selectionRect.width / 2 -
      toolbarRect.width / 2}px`;
  }

  /**
   * Render method.
   * @function render
   * @returns {string} Markup of the container.
   */
  render() {
    if (!this.props.selection) {
      return <span />;
    }
    return (
      <div
        className="ui black pointing below label"
        style={{ position: 'absolute' }}
      >
        <div className="ui black buttons">
          <StyleButton
            icon="bold"
            style="BOLD"
            onToggle={this.props.onToggleInline}
          />
          <StyleButton
            icon="italic"
            style="ITALIC"
            onToggle={this.props.onToggleInline}
          />
          <Button icon="linkify" onClick={this.props.onToggleLink} />
        </div>
      </div>
    );
  }
}

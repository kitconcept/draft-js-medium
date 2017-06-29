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
   * Construcor
   * @param {Object} props Properties.
   * @constructs
   */
  constructor(props) {
    super(props);
    this.state = {
      showEditLink: false,
      link: '',
    };
    this.onChangeLink = this.onChangeLink.bind(this);
    this.onKeyDownLink = this.onKeyDownLink.bind(this);
    this.onShowEditLink = this.onShowEditLink.bind(this);
  }

  /**
   * Component did update handler.
   * @function componentDidUpdate
   * @returns {undefined}
   */
  componentDidUpdate() {
    if (!this.props.selection) {
      return;
    }

    const selection = window.getSelection();
    const selectionRange = selection.isCollapsed
      ? null
      : selection.getRangeAt(0);
    const selectionRect = selectionRange
      ? selectionRange.getBoundingClientRect()
      : null;
    if (!selectionRect) {
      return;
    }

    const toolbarNode = ReactDOM.findDOMNode(this);
    const toolbarRect = toolbarNode.getBoundingClientRect();

    toolbarNode.style.top = `${selectionRect.top - toolbarRect.height - 6}px`;
    toolbarNode.style.left = `${selectionRect.left +
      selectionRect.width / 2 -
      toolbarRect.width / 2}px`;
  }

  /**
   * On change link.
   * @function onChangeLink
   * @param {Object} event Event object.
   * @returns {undefined}
   */
  onChangeLink(event) {
    this.setState({ link: event.target.value });
  }

  /**
   * On key down link.
   * @function onKeyDownLink
   * @param {Object} event Event object.
   * @returns {undefined}
   */
  onKeyDownLink(event) {
    if (event.key === 'Enter') {
      this.props.onToggleLink(this.state.link);
      this.setState({ showEditLink: false, link: '' });
      event.preventDefault();
    }
  }

  /**
   * On show edit link.
   * @function onShowEditLink
   * @returns {undefined}
   */
  onShowEditLink() {
    this.setState({ showEditLink: true });
  }

  /**
   * Render method.
   * @function render
   * @returns {string} Markup of the container.
   */
  render() {
    if (!this.props.selection && !this.state.showEditLink) {
      return <span />;
    }
    return (
      <div
        className="ui black pointing below label"
        style={{ position: 'absolute' }}
      >
        {this.state.showEditLink
          ? <div className="ui transparent inverted input">
              <input
                type="text"
                value={this.state.link}
                onChange={this.onChangeLink}
                onKeyDown={this.onKeyDownLink}
              />
            </div>
          : <div className="ui black buttons">
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
              <Button icon="linkify" onClick={this.onShowEditLink} />
            </div>}
      </div>
    );
  }
}

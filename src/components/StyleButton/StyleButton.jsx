/**
 * StyleButton component.
 * @module components/StyleButton
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

/**
 * StyleButton component class.
 * @class StyleButton
 * @extends Component
 */
export default class StyleButton extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    icon: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired,
  };

  /**
   * Construcor
   * @param {Object} props Properties.
   * @constructs
   */
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  /**
   * On click method.
   * @function onClick
   * @returns {undefined}
   */
  onClick() {
    this.props.onToggle(this.props.style);
  }

  /**
   * Render method.
   * @function render
   * @returns {string} Markup of the container.
   */
  render() {
    return <Button onClick={this.onClick} icon={this.props.icon} />;
  }
}

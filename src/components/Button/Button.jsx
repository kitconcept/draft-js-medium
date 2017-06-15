/**
 * Button component.
 * @module components/Button
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Button component class.
 * @class Button
 * @extends Component
 */
export default class Button extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
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
   * @param {Object} event Event object.
   * @returns {undefined}
   */
  onClick(event) {
    event.preventDefault();
    this.props.onClick();
  }

  /**
   * Render method.
   * @function render
   * @returns {string} Markup of the container.
   */
  render() {
    return (
      <button className="ui icon button" onMouseDown={this.onClick}>
        <i aria-hidden="true" className={`${this.props.icon} icon`} />
      </button>
    );
  }
}

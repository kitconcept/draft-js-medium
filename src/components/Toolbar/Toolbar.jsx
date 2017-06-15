/**
 * Toolbar component.
 * @module components/Toolbar
 */

import React, { Component } from 'react';
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
  };

  /**
   * Render method.
   * @function render
   * @returns {string} Markup of the container.
   */
  render() {
    return (
      <div className="ui black pointing below label">
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

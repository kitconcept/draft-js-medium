/**
 * Toolbar component.
 * @module components/Toolbar
 */

import React, { Component } from 'react';

import Button from '../Button/Button';

/**
 * Toolbar component class.
 * @class Toolbar
 * @extends Component
 */
export default class Toolbar extends Component {
  /**
   * Render method.
   * @function render
   * @returns {string} Markup of the container.
   */
  render() {
    return (
      <div className="ui black pointing below label">
        <div className="ui black buttons">
          <Button icon="bold" />
          <Button icon="italic" />
          <Button icon="linkify" />
        </div>
      </div>
    );
  }
}

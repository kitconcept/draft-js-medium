import React, { Component } from 'react';

class Editor extends Component {
  render() {
    return (
      <div>
        <div className="ui black pointing below label">
          <div className="ui black buttons">
            <button className="ui icon button">
              <i aria-hidden="true" className="bold icon" />
            </button>
            <button className="ui icon button">
              <i aria-hidden="true" className="italic icon" />
            </button>
            <button className="ui icon button">
              <i aria-hidden="true" className="linkify icon" />
            </button>
          </div>
        </div>
        <h2>Editor</h2>
      </div>
    );
  }
}

export default Editor;

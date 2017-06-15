import React, { Component } from 'react';
import { Editor as DraftEditor, EditorState } from 'draft-js';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = this.onChange.bind(this);
  }

  onChange(editorState) {
    this.setState({ editorState });
  }

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
        <DraftEditor
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Editor;

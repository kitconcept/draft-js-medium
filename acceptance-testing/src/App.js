import React, { Component } from 'react';
import Editor from '../../lib/components/Editor';

class App extends Component {
  render() {
    return (
      <div className="ui container"><h1>Draft.js Medium</h1><Editor /></div>
    );
  }
}

export default App;

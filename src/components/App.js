import React, { Component } from 'react';
import '../../css/components/App.css';
import UndoTree from './UndoTree';
import Editor from './Editor';

class App extends Component {
    render() {
        return ( 
          <div>
            <Editor />
            <UndoTree />
          </div>
        );
    }
}

export default App;
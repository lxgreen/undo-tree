import React, { Component } from 'react';
import '../../css/components/App.css';
import UndoTree from './UndoTree';

class App extends Component {
    render() {
        return ( 
          <div>
            <UndoTree />
          </div>
        );
    }
}

export default App;
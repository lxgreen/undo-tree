import React, { Component } from 'react';
import Tree from 'react-tree-graph';

import 'react-tree-graph/dist/style.css';
import '../../css/components/UndoTree.css';

class UndoTree extends Component {
    constructor() {
        super();
        this.state = { 
            data: {
                'name': '',
                'id': 1
            } 
        };
    }

    nodeClick(key) {
        console.log(key);
    }

    render() {
        return (
            <div className='UndoTree'>
                <Tree data={this.state.data} 
                    height={300} 
                    width={400} keyProp='id' 
                    nodeClickHandler={this.nodeClick.bind(this)}/>
            </div>
        );
    }
}

export default UndoTree;
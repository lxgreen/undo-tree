import React, { Component } from 'react';

import '../../css/components/UndoTree.css';

class UndoTree extends Component {
    render() {
        return (
            <div className="UndoTree">
                <div className="state init">new</div>
            </div>
        );
    }
}

export default UndoTree;
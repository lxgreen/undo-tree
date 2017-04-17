import React, { Component } from 'react';
import Tree from 'react-tree-graph';

import 'react-tree-graph/dist/style.css';
import '../../css/components/UndoTree.css';

class UndoTree extends Component {
    constructor() {
        super();
        this.state = { 
            data: {
                'name': 'Eve',
                'children': [
                    {
                        'name': 'Cain'
                    },
                    {
                        'name': 'Seth',
                        'children': [
                            {
                                'name': 'Enos'
                            },
                            {
                                'name': 'Noam'
                            }
                        ]
                    },
                    {
                        'name': 'Abel'
                    },
                    {
                        'name': 'Awan',
                        'children': [
                            {
                                'name': 'Enoch'
                            }
                        ]
                    },
                    {
                        'name': 'Azura'
                    }
                ]
            } 
        };
    }

    render() {
        return (
            <div className='UndoTree'>
            <Tree data={this.state.data} height={400} width={400} />
            </div>
        );
    }
}

export default UndoTree;
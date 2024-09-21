
'use client'
import React, { useEffect, useState } from 'react';
import { addNode, removeNode } from '../services/treeService';
import { findNodeById } from '../utils/treeUtils';
import { TreeNode } from '../types/treeTypes';
import BoxItem from './BoxItem';
import ActionIcon from './ActionIcon';
import { useTreeData } from '../context/TreeContext';

const TreeComponent: React.FC = () => {
    const { treeData, setTreeData } = useTreeData();

    // Example: Initialize tree data
    useEffect(() => {
        const initialTree = [{ id: 1, name: 'Root', children: [] }];
        setTreeData(initialTree);
    }, [setTreeData]);

    const renderTree = (nodes: TreeNode[]) => {
        console.log(nodes);

        return nodes.map((node) => (
            <li key={node.id} style={{ display: "flex", alignItems: 'center', gap: '20px' }}>
                <BoxItem text={node.name} image='folder.svg' />
                <ActionIcon nodeId={node.id} />
                {node.children.length > 0 && <ul>{renderTree(node.children)}</ul>}
            </li>
        ));
    };

    console.log(treeData ? 'hi' : 'none');

    return (
        <div style={{ padding: '4rem' }}>

            {treeData ? <ul>{renderTree(treeData)}</ul> : <p>Loading ...</p>}
        </div>
    );
};

export default TreeComponent;

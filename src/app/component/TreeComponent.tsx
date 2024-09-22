
'use client'
import React, { Fragment, useEffect, useState } from 'react';
import { addNode, removeNode } from '../services/treeService';
import { findNodeById } from '../utils/treeUtils';
import { TreeNode } from '../types/treeTypes';
import BoxItem from './BoxItem';
import ActionIcon from './ActionIcon';
import { useTreeData } from '../context/TreeContext';

const TreeComponent: React.FC = () => {
    const { treeData, setTreeData, setInputName, inputName, isCreatingItem, setIsCreatingItem } = useTreeData();


    // Example: Initialize tree data
    useEffect(() => {
        const initialTree = [{ id: 1, name: 'Root', children: [], type: 'folder', visibleIcon: true }];
        setTreeData(initialTree);
    }, [setTreeData]);


    console.log(treeData, 'all nodes');

    const handleUpdateNode = (nodeId: number) => {
        if (isCreatingItem) { alert('You have to complete this item first then create another one') }
        // console.log("oo");
        console.log(nodeId);


        // if (!inputName.trim()) return; // Prevent adding empty folder names

        // Create the new folder (node)
        console.log(treeData, "data");

        const x = treeData.find((tree: any) => tree.id === nodeId)
        console.log(x, 'ppp');


        // Assuming we're adding to the root node
        // const updatedTree = { ...treeData, children: [...treeData.children, newFolder] };

        // Update the tree data
        // setTreeData(updatedTree);

        // Reset the input
        setInputName('');
        setIsCreatingItem(false);
    };

    const renderTree = (nodes: TreeNode[]) => {


        return nodes.map((node) => (
            <Fragment key={node.id}>
                <div key={node.id} className='child-component' style={{ display: "flex", alignItems: 'center', marginTop: '20px', gap: '20px' }}>
                    {node.name !== '' ? <BoxItem text={node.name} image={`text.svg`} />
                        : <div className='input-box'>
                            <input onChange={(e) => setInputName(e.target.value)} type='text' style={{ border: 'none', background: '#e7e7e7', outline: 'none' }} className='box-style' />
                            <button style={{ paddingLeft: '10px' }} onClick={() => handleUpdateNode(node.id)}>+</button>
                        </div>}

                    {node.visibleIcon && <ActionIcon nodeId={node.id} />}


                </div>
                {node.children.length > 0 && <div className='parent-component' style={{ marginLeft: '20px', marginTop: '20px' }}>{renderTree(node.children)}</div>}
            </Fragment>
        ));
    };

    return (
        <div style={{ padding: '4rem' }}>
            {treeData ? <div className='root-container' >
                {renderTree(treeData)}
            </div> : <p>Loading ...</p>}
        </div>
    );
};

export default TreeComponent;

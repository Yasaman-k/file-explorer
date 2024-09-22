
'use client'
import React, { Fragment, useEffect, useState } from 'react';
import { updateNode } from '../utils/treeUtils';
import { TreeNode } from '../types/treeTypes';
import BoxItem from './BoxItem';
import ActionIcon from './ActionIcon';
import { useTreeData } from '../context/TreeContext';
import Image from 'next/image'

const TreeComponent: React.FC = () => {
    const { treeData, setTreeData, setInputName, inputName, isCreatingItem, setIsCreatingItem } = useTreeData();


    // Example: Initialize tree data
    useEffect(() => {
        const initialTree = [{ id: 1, name: 'Root', children: [], type: 'folder', visibleIcon: true }];
        setTreeData(initialTree);
    }, [setTreeData]);




    const handleUpdateNode = (nodeId: number) => {
        if (!inputName.trim()) alert('you cant create empty item'); // Prevent adding empty folder names

        const updateTreeData = updateNode(treeData, nodeId, inputName)

        // Update the tree data
        setTreeData(updateTreeData);

        // Reset the input
        setInputName('');
        setIsCreatingItem(false);
    };

    const renderTree = (nodes: TreeNode[]) => {
        return nodes.map((node) => (
            <Fragment key={node.id}>
                <div key={node.id} className='child-component' style={{ display: "flex", alignItems: 'center', marginTop: '20px', gap: '20px' }}>
                    {node.name !== '' ? <BoxItem text={node.name} image={`${node.type}.svg`} />
                        : <div className='input-box flex'>
                            <div style={{ position: 'relative' }}>
                                <input onChange={(e) => setInputName(e.target.value)} type='text' style={{ background: '#e7e7e7', paddingLeft: '34px' }} className='box-style' />
                                <Image style={{ position: 'absolute', top: '20%', paddingLeft: '10px', left: 0 }} src={`text.svg`} alt={node.type} width="25" height="20" />
                            </div>
                            <button style={{ marginLeft: '20px', padding: '8px' }} onClick={() => handleUpdateNode(node.id)}>+</button>
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

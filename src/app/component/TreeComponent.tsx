
'use client'
import React, { Fragment, useEffect } from 'react';
import { isNameRepetitive, updateNode, updateNodeIcon } from '../utils/treeUtils';
import { TreeNode } from '../types/treeTypes';
import BoxItem from './BoxItem';
import ActionIcon from './ActionIcon';
import { useTreeData } from '../context/TreeContext';
import Image from 'next/image'

const TreeComponent: React.FC = () => {
    const { treeData, setTreeData, setInputName, inputName, setIsCreatingItem } = useTreeData();
    console.log(treeData);

    // Example: Initialize tree data
    useEffect(() => {
        const initialTree = [{ id: 1, name: 'Root', children: [], type: 'folder', visibleIcon: true }];
        setTreeData(initialTree);
    }, [setTreeData]);

    const handleUpdateNode = (nodeId: number, type: string) => {
        if (!inputName.trim()) alert('you cant create empty item'); // Prevent adding empty folder names
        else {
            if (isNameRepetitive(treeData, inputName, type, nodeId)) alert(`item is existed`)
            else {
                const updateTreeData = updateNode(treeData, nodeId, inputName)
                // Update the tree data
                setTreeData(updateTreeData);

                // Reset the input
                setInputName('');
                setIsCreatingItem(false);
            }
        }
    };


    const updateIconVisible = (treeData: TreeNode[], nodeId: number, visibleIcon: boolean) => {
        const uData = updateNodeIcon(treeData, nodeId, visibleIcon)
        setTreeData(uData);
    }

    const renderTree = (nodes: TreeNode[]) => {
        return nodes.map((node) => (
            <Fragment key={node.id}>
                <div key={node.id} className='child-component flex' style={{ alignItems: 'center', marginTop: '20px', gap: '20px' }}>

                    {node.name !== '' ?
                        <div onClick={() => { updateIconVisible(treeData, node.id, !node.visibleIcon) }}>
                            <BoxItem
                                text={node.name}
                                image={(node.type === 'file' ? (node.suffix !== 'txt' && node.suffix !== 'html' ? 'txt' : node.suffix) : node.type) + '.svg'}
                            />
                        </div>

                        : <div className='input-box flex'>
                            <div style={{ position: 'relative' }}>
                                <input onChange={(e) => setInputName(e.target.value)} type='text' style={{ background: '#e7e7e7', paddingLeft: '34px' }} className='box-style' />
                                {node.type === 'folder' && <Image alt={node.type} src={node.type + '.svg'} style={{ position: 'absolute', top: '20%', paddingLeft: '10px', left: 0 }} width="25" height="20" />}
                            </div>
                            <button className='plus-input' style={{ marginLeft: '20px', padding: '8px' }} onClick={() => handleUpdateNode(node.id, node.type)}>+</button>
                        </div>}


                    {node.visibleIcon && (node.type === 'folder' ? < ActionIcon nodeId={node.id} /> : < ActionIcon addFile={false} addFolder={false} nodeId={node.id} />)}
                </div>

                {node.children.length > 0 && <div className='parent-component' style={{ marginLeft: '20px', marginTop: '20px', visibility: `${!node.visibleIcon ? 'hidden' : 'visible'}` }}>{renderTree(node.children)}</div>}
            </Fragment >
        ));
    };

    return (
        <div style={{ padding: '4rem' }}>
            {treeData ? <div className='root-container'>
                {renderTree(treeData)}
            </div> : <p>Loading ...</p>}
        </div>
    );
};

export default TreeComponent;
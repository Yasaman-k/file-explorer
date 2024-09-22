'use client'
import Image from 'next/image'
import { useState } from 'react';
import { TreeNode } from '../types/treeTypes';
import { addNode, removeNode } from '../services/treeService';
import { useTreeData } from '../context/TreeContext';

interface Props {
    addFile?: boolean;
    addFolder?: boolean;
    deleteItem?: boolean;
    nodeId: number;
}

const ActionIcon: React.FC<Props> = ({ addFile = true, addFolder = true, deleteItem = true, nodeId }) => {
    // const [tree, setTree] = useState<TreeNode[]>(initialTree);
    //   const { treeData, setTreeData } = setTreeData();
    const { treeData, setTreeData, inputName, setIsInputVisible } = useTreeData();

    const handleAddFileNode = (parentId: number, nodeName: string) => {
        setIsInputVisible(true)
        const newNode: TreeNode = { id: Date.now(), name: nodeName, children: [], type: 'file' };
        setTreeData((prevTree: any) => addNode(prevTree, parentId, newNode));
    };

    const handleAddFolderNode = (parentId: number, nodeName: string) => {
        setIsInputVisible(true)
        const newNode: TreeNode = { id: Date.now(), name: nodeName, children: [], type: 'folder' };
        setTreeData((prevTree: any) => addNode(prevTree, parentId, newNode));
    };


    const handleRemoveNode = (nodeId: number) => {
        setTreeData((prevTree: any) => removeNode(prevTree, nodeId));
    };


    return (
        <div className='img-container'>
            {addFile && <button onClick={() => handleAddFileNode(nodeId, inputName)} >
                <Image src={`add-file.svg`} alt={'add-file'} width="30" height="30" />
            </button>}
            {addFolder && <button onClick={() => handleAddFolderNode(nodeId, inputName)}><Image src={`add-folder.svg`} alt={'add-folder'} width="30" height="30" /></button>}
            {deleteItem && <button onClick={() => handleRemoveNode(nodeId)}>
                <Image src={`delete.svg`} alt={'deleted'} width="30" height="30" />
            </button>}
        </div>
    )
}
export default ActionIcon;
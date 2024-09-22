'use client'
import Image from 'next/image'
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

    const { treeData, setTreeData, inputName, setIsCreatingItem, isCreatingItem } = useTreeData();

    const handleAddNode = (parentId: number, nodeName: string, type: 'file' | 'folder') => {
        if (isCreatingItem) { alert('You have to complete this item first then create another one') }
        else {
            setIsCreatingItem(true)
            const newNode: TreeNode = {
                id: Date.now(), name: nodeName, children: [], type,
                visibleIcon: false
            };
            setTreeData((prevTree: any) => addNode(prevTree, parentId, newNode));
        }

    };

    const handleRemoveNode = (nodeId: number) => {
        setTreeData((prevTree: any) => removeNode(prevTree, nodeId));
    };


    return (
        <div className='img-container'>
            {addFile && <button onClick={() => handleAddNode(nodeId, inputName, 'file')} >
                <Image src={`add-file.svg`} alt={'add-file'} width="30" height="30" />
            </button>}
            {addFolder && <button onClick={() => handleAddNode(nodeId, inputName, 'folder')}><Image src={`add-folder.svg`} alt={'add-folder'} width="30" height="30" /></button>}
            {deleteItem && <button onClick={() => handleRemoveNode(nodeId)}>
                <Image src={`delete.svg`} alt={'deleted'} width="30" height="30" />
            </button>}
        </div>
    )
}
export default ActionIcon;
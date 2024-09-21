import { TreeNode } from '../types/treeTypes';

const addTreeNodeFile = () => {};
const removeTreeNode = () => {
  // if it is parent must remove all children
};

const addTreeNodeFolder = () => {
  // it is a parent
};

// search if folder of file is not repetetive

// Find a node in the tree by its ID
export const findNodeById = (tree: TreeNode[], nodeId: number): TreeNode | null => {
  for (const node of tree) {
    if (node.id === nodeId) return node;
    if (node.children.length > 0) {
      const found = findNodeById(node.children, nodeId);
      if (found) return found;
    }
  }
  return null;
};

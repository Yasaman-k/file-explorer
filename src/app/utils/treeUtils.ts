import { TreeNode } from '../types/treeTypes';

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

export const updateNode = (tree: TreeNode[], nodeId: number, newName: string): TreeNode[] => {
  return tree.map((node) => {
    if (node.id === nodeId) {
      // Update the node's name

      // add suffix
      if (node.type === 'file') {
        const lastFullStopIndex = newName.lastIndexOf('.');
        const suffix = newName.slice(lastFullStopIndex + 1);
        return { ...node, name: newName, suffix };
      }
    } else if (node.children.length > 0) {
      // Recursively check the children
      return { ...node, children: updateNode(node.children, nodeId, newName) };
    }
    return node;
  });
};

// Function to search for a repetitive node name
export const isNameRepetitive = (tree: TreeNode[], nodeName: string): boolean => {
  for (const node of tree) {
    // Check if the current node's name matches
    if (node.name === nodeName) {
      return true;
    }

    // Recursively check the children
    if (node.children.length > 0) {
      if (isNameRepetitive(node.children, nodeName)) {
        return true;
      }
    }
  }
  return false;
};

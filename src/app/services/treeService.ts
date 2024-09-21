// services/treeService.ts
import { TreeNode } from '../types/treeTypes';

// Function to add a node to a specific parent in the tree
export const addNode = (tree: TreeNode[], parentId: number, newNode: TreeNode): TreeNode[] => {
  return tree.map((node) => {
    if (node.id === parentId) {
      return {
        ...node,
        children: [...node.children, newNode],
      };
    } else if (node.children.length > 0) {
      return {
        ...node,
        children: addNode(node.children, parentId, newNode),
      };
    }
    return node;
  });
};

// Function to remove a node from the tree by ID
export const removeNode = (tree: TreeNode[], nodeId: number): TreeNode[] => {
  return tree
    .filter((node) => node.id !== nodeId)
    .map((node) => ({
      ...node,
      children: removeNode(node.children, nodeId),
    }));
};

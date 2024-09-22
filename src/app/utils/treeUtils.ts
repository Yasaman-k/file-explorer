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
      // add suffix
      if (node.type === 'file') {
        const lastFullStopIndex = newName.lastIndexOf('.');
        const suffix = newName.slice(lastFullStopIndex + 1);
        return { ...node, name: newName, suffix };
      }
      return { ...node, name: newName };
    } else if (node.children.length > 0) {
      // Recursively check the children
      return { ...node, children: updateNode(node.children, nodeId, newName) };
    }
    return node;
  });
};

export const updateNodeIcon = (tree: TreeNode[], nodeId: number, visibleIcon: boolean): TreeNode[] => {
  return tree.map((node) => {
    if (node.id === nodeId) {
      // Update the node's name

      // add suffix
      // if (node.type === 'file') {
      //   const lastFullStopIndex = newName.lastIndexOf('.');
      //   const suffix = newName.slice(lastFullStopIndex + 1);
      //   return { ...node, name: newName, suffix };
      // }
      // this is folder
      return { ...node, visibleIcon };
    } else if (node.children.length > 0) {
      // Recursively check the children
      return { ...node, children: updateNodeIcon(node.children, nodeId, visibleIcon) };
    }
    return node;
  });
};

const findParentNode = (tree: TreeNode[], selectedNodeId: number): any => {
  for (const node of tree) {
    // Check if the current node has the selected node as a child
    if (node.children.some((child) => child.id === selectedNodeId)) {
      return node; // Return the parent node as a TreeNode
    }

    // Recursively search for the parent in the children
    const foundParent = findParentNode(node.children, selectedNodeId);
    if (foundParent) return foundParent; // Return the found parent if any
  }

  //return null; // Parent not found
};

// Function to search for a repetitive node name
export const isNameRepetitive = (tree: TreeNode[], nodeName: string, type: string, nodeId: number): boolean => {
  // Find the parent node of the selected node
  const currentParent = findParentNode(tree, nodeId);

  // If the parent is not found, return false
  if (!currentParent) return false;

  // Loop through the siblings (children of the parent)
  for (const node of currentParent.children) {
    // Check if the current node's name matches and is of a different type
    if (node.name === nodeName && node.type !== type) {
      return true; // Found a match
    }

    // Recursively check the children of the current node
    if (node.children.length > 0) {
      if (isNameRepetitive(node.children, nodeName, type, nodeId)) {
        return true; // Found a match in children
      }
    }
  }

  return false; // No repetition found
};

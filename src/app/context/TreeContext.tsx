'use client';
import { createContext, useContext, useState } from 'react';

export const TreeContext = createContext<any>(null);

export const TreeProvider = ({ children }: any) => {
  const [treeData, setTreeData] = useState<[]>();
  const [inputName, setInputName] = useState<string>('');
  const [isCreatingItem, setIsCreatingItem] = useState<boolean>(false);

  return <TreeContext.Provider value={{ treeData, setTreeData, setInputName, inputName, setIsCreatingItem, isCreatingItem }}>{children}</TreeContext.Provider>;
};
export const useTreeData = () => useContext(TreeContext);

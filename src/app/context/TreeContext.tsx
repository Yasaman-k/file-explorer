'use client';
import { createContext, useContext, useState } from 'react';

export const TreeContext = createContext<any>(null);

export const TreeProvider = ({ children }: any) => {
  const [treeData, setTreeData] = useState<[]>(null);
  const [inputName, setInputName] = useState<string>('');
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);

  return <TreeContext.Provider value={{ treeData, setTreeData, setInputName, inputName, setIsInputVisible, isInputVisible }}>{children}</TreeContext.Provider>;
};
export const useTreeData = () => useContext(TreeContext);

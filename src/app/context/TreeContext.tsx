'use client';
import { createContext, useContext, useState } from 'react';

export const TreeContext = createContext<any>(null);

export const TreeProvider = ({ children }: any) => {
  const [treeData, setTreeData] = useState<any>(null);

  return <TreeContext.Provider value={{ treeData, setTreeData }}>{children}</TreeContext.Provider>;
};
export const useTreeData = () => useContext(TreeContext);

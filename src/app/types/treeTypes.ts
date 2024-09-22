export type TreeNode = {
  id: number;
  name: string;
  children: TreeNode[];
  type: 'file' | 'folder';
  visibleIcon?: boolean;
  suffix?: 'html' | 'txt' | string;
};

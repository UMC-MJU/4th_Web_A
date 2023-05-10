import React, { createContext, useContext, useState } from 'react';
import { CustomFolder, dummyFolder } from '../../lib/customFolder';
import { findParentFolder } from './lib';

type ItemType = 'folder' | 'file';

interface State {
  root: CustomFolder | null;
  setRoot: (root: CustomFolder) => void;
  deleteItem: (type: ItemType, key: string) => void;
}

const defaultState: State = {
  root: null,
  setRoot: () => {},
  deleteItem: () => {},
};

const Ctx = createContext(defaultState);

const FolderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState(defaultState);

  const setRoot = (root: CustomFolder) => {
    setState((prev) => ({ ...prev, root }));
  };

  const deleteItem = (type: ItemType, key: string) => {
    setState((prev) => {
      const parentFolder = findParentFolder(key, prev.root!);
      if (!parentFolder) {
        throw new Error(`Cannot find such ${type}`);
      }
      if (type === 'folder') {
        // parentFolder.folders = parentFolder.folders.filter((folder) => folder.key !== key);
      } else {
        // parentFolder.files = parentFolder.files.filter((file) => file.key !== key);
      }
      return { ...prev, root: prev.root };
    });
  };

  const providerValue = {
    root: state.root,
    setRoot,
    deleteItem,
  };

  return <Ctx.Provider value={providerValue}>{children}</Ctx.Provider>;
};

export const useFolder = () => {
  return useContext(Ctx);
};

export default FolderProvider;

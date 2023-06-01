import React, { createContext, useContext, useState } from 'react';
import { CustomFile } from '../../pages/home/hooks/CustomFile';
import { CustomFolder } from '../../pages/home/hooks/CustomFolder';

type SelectType = 'explorer' | 'editor';
interface State {
  fileList: CustomFile[];
  activeFile: CustomFile | null;
  selectedItemInExplorer: {
    item: CustomFolder | CustomFile | null;
    color: 'strong' | 'light';
  };
  selectItem: (selectType: SelectType, item: CustomFolder | CustomFile) => void;
  closeFile: (file: CustomFile) => void;
}

const defaultState: State = {
  fileList: [],
  activeFile: null,
  selectedItemInExplorer: {
    item: null,
    color: 'strong',
  },
  selectItem: () => {},
  closeFile: () => {},
};

const Ctx = createContext(defaultState);

const EditorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState(defaultState);

  const selectItem = (selectType: SelectType, item: CustomFolder | CustomFile) => {
    // Explorer에서 파일이나 폴더가 선택되었을 때
    if (selectType === 'explorer') {
      const newFileList = [...state.fileList];

      // 아이템이 파일이고 에디터에 없는 파일이면 에디터에 파일 추가
      if (item instanceof CustomFile && !state.fileList.find((f) => f.key === item.key)) {
        newFileList.push(item);
      }
      setState((prev) => ({
        ...prev,
        // 선택된 아이템이 파일이면 active 상태로 바꾸기
        activeFile: item instanceof CustomFolder ? state.activeFile : item,
        fileList: newFileList,
        selectedItemInExplorer: {
          item,
          color: 'strong',
        },
      }));
    }

    // Editor에서 파일이나 폴더가 선택되었을 때
    else {
      if (item instanceof CustomFolder) throw new Error('폴더가 Editor 상단에서 선택될 수 없음');
      setState((prev) => ({
        ...prev,
        activeFile: item,
        selectedItemInExplorer: {
          item,
          color: 'light',
        },
      }));
    }
  };

  // 삭제하는 파일이 active 파일이면 다음 active 파일은 리스트의 첫 번째 파일
  // 실제 vscode는 다음 active 파일 순서를 따로 스택으로 관리함
  const closeFile = (file: CustomFile) => {
    const newFileList = state.fileList.filter((f) => f.key !== file.key);
    const nextActiveFile =
      state.activeFile?.key !== file.key ? state.activeFile : newFileList.length ? newFileList[0] : null;

    setState((prev) => ({
      ...prev,
      fileList: newFileList,
      // activeFile: nextActiveFile,
      activeFile: nextActiveFile,
      selectedItemInExplorer: {
        item: nextActiveFile,
        color: 'light',
      },
    }));
  };

  const providerValue = {
    fileList: state.fileList,
    activeFile: state.activeFile,
    selectedItemInExplorer: state.selectedItemInExplorer,
    selectItem,
    closeFile,
  };

  return <Ctx.Provider value={providerValue}>{children}</Ctx.Provider>;
};

export const useEditor = () => {
  return useContext(Ctx);
};

export default EditorProvider;

import React, { useState } from 'react';
import * as F from './Folder.styled';
import * as U from './Util.styled';
import { ReactComponent as ChevronRight } from '../../../assets/icons/chevron_right.svg';
import { ReactComponent as ChevronDown } from '../../../assets/icons/chevron_down.svg';
import { ReactComponent as FolderIcon } from '../../../assets/icons/fileExplorer/folder_icon.svg';
import { CustomFolder } from '../hooks/CustomFolder';
import File from './File';
import { useFolder } from '../../../context/useFolder/useFolder';
import { useEditor } from '../../../context/useEditorHeader/useEditor';

const Folder: React.FC<{ folder: CustomFolder; depth: number }> = ({ folder, depth }) => {
  // console.log(folder.name);
  const [childrenState, setChildrenState] = useState<'none' | 'hidden' | 'visible'>('none');
  const { deleteItem } = useFolder();
  const { selectItem, selectedItemInExplorer } = useEditor();

  const selected = selectedItemInExplorer.item?.key !== folder.key ? 'none' : selectedItemInExplorer.color;
  function handleItemClick() {
    console.log('folder click');
    selectItem('explorer', folder);
    if (childrenState === 'visible') {
      setChildrenState('hidden');
    } else {
      setChildrenState('visible');
    }
  }

  return (
    <F.FolderWrapper>
      <F.Folder onClick={handleItemClick} selected={selected}>
        <F.IndentWrapper>
          {Array.from({ length: depth }, (_, i) => i).map((i) => (
            <F.FolderIndent key={i} />
          ))}
        </F.IndentWrapper>
        <F.FolderItem>
          {childrenState !== 'visible' && (
            <U.ChevronRightWrapper>
              <ChevronRight />
            </U.ChevronRightWrapper>
          )}
          {childrenState === 'visible' && (
            <U.ChevronDownWrapper>
              <ChevronDown />
            </U.ChevronDownWrapper>
          )}
          <FolderIcon />
          <span>{folder.name}</span>
        </F.FolderItem>
      </F.Folder>
      {childrenState !== 'none' && (
        <U.Children hidden={childrenState === 'hidden'}>
          {folder.folders.map((folder) => (
            <Folder key={folder.key} folder={folder} depth={depth + 1} />
          ))}
          {folder.files.map((file) => (
            <File key={file.key} file={file} depth={depth + 1} />
          ))}
        </U.Children>
      )}
    </F.FolderWrapper>
  );
};

export default Folder;

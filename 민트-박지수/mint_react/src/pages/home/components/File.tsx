import React from 'react';
import * as F from './File.styled';
import { CustomFile } from '../hooks/CustomFile';
import { ReactComponent as ReactIcon } from '../../../assets/icons/fileIcons/css.svg';
import { useFolder } from '../../../context/useFolder/useFolder';
import { useEditor } from '../../../context/useEditorHeader/useEditor';
import { SvgWrapper } from '../../../components/styleUtility';

const File: React.FC<{ file: CustomFile; depth: number }> = ({ file, depth }) => {
  const { deleteItem } = useFolder();
  const { selectedItemInExplorer, selectItem } = useEditor();
  function handleFileClick() {
    selectItem('explorer', file);
  }
  const selected = selectedItemInExplorer.item?.key !== file.key ? 'none' : selectedItemInExplorer.color;
  return (
    <F.File onClick={handleFileClick} selected={selected}>
      <F.IndentWrapper>
        {Array.from({ length: depth }, (_, i) => i).map((i) => (
          <F.FolderIndent key={i} />
        ))}
        <F.FileIndent />
      </F.IndentWrapper>
      <F.FileItem>
        {/* <img src={reactIcon} alt='' /> */}
        <SvgWrapper width='20px' height='20px'>
          <ReactIcon />
        </SvgWrapper>
        <span>{file.name}</span>
      </F.FileItem>
    </F.File>
  );
};

export default File;

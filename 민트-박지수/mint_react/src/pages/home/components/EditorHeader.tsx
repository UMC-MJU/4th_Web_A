import React from 'react';
import * as F from './EditorHeader.styled';
import { useEditor } from '../../../context/useEditorHeader/useEditor';
import { CustomFile } from '../hooks/CustomFile';
import { SvgWrapper } from '../../../components/styleUtility';
import { ReactComponent as RunIcon } from '../../../assets/icons/EditorHeader/run_icon.svg';
import { ReactComponent as CodeSplit } from '../../../assets/icons/EditorHeader/code_split.svg';
import { ReactComponent as HBar } from '../../../assets/icons/EditorHeader/h_bar.svg';
import { ReactComponent as ReactIcon } from '../../../assets/icons/fileIcons/css.svg';

interface Props {}

type EditBtn = {
  icon: React.ReactNode;
  onClick?: () => void;
};

const EditBtns: EditBtn[] = [{ icon: <RunIcon /> }, { icon: <CodeSplit /> }, { icon: <HBar /> }];

const EditorHeader: React.FC<Props> = () => {
  const { fileList, closeFile, activeFile, selectItem } = useEditor();
  function handleFileItemClick(e: React.MouseEvent<HTMLElement>, file: CustomFile) {
    // if (e.target !== e.currentTarget) return;
    selectItem('editor', file);
  }

  function handleCloseBtnClick(e: React.MouseEvent<HTMLElement>, file: CustomFile) {
    e.stopPropagation();
    closeFile(file);
  }

  return (
    <F.EditorHeader>
      <F.FileNameSection>
        {fileList.map((file, i) => (
          <F.FileItem key={i} onClick={(e) => handleFileItemClick(e, file)} selected={file.key === activeFile?.key}>
            <SvgWrapper width='20px'>
              <ReactIcon />
            </SvgWrapper>
            <span>{file.name}</span>
            <F.CloseBtn onClick={(e) => handleCloseBtnClick(e, file)}>✕</F.CloseBtn>
          </F.FileItem>
        ))}
      </F.FileNameSection>
      <F.ButtonSection>
        {EditBtns.map((btn, i) => (
          <F.EditBtn key={i}>{btn.icon}</F.EditBtn>
        ))}
      </F.ButtonSection>
    </F.EditorHeader>
  );
};

export default EditorHeader;

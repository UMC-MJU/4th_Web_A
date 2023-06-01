import React from 'react';
import * as F from './FileExplorer.styled';
import * as U from './Util.styled';
import { ReactComponent as ChevronDown } from '../../../assets/icons/chevron_down.svg';

import newFileBtn from '../../../assets/icons/fileExplorer/new_file.png';
import newFolderBtn from '../../../assets/icons/fileExplorer/new_folder.png';
import refreshBtn from '../../../assets/icons/fileExplorer/refresh.png';
import collapseBtn from '../../../assets/icons/fileExplorer/collapse_folder.png';
import File from './File';
import Folder from './Folder';
import { CustomFolder } from '../hooks/CustomFolder';
import { CustomFile } from '../hooks/CustomFile';

interface Props {
  folders?: CustomFolder[];
  files?: CustomFile[];
}

interface HeaderBtn {
  src: string;
  alt: string;
  onClick?: () => void;
}

const headerBtns: HeaderBtn[] = [
  { src: newFileBtn, alt: '새 파일 추가' },
  { src: newFolderBtn, alt: '새 폴더 추가' },
  { src: refreshBtn, alt: '새로고침' },
  { src: collapseBtn, alt: '모든 폴더 접기' },
];

const FileExplorer: React.FC<Props> = ({ folders = [], files = [] }) => {
  return (
    <F.FileExplorer>
      <F.Header>
        <span>EXPLORER</span>
        <HBar />
      </F.Header>
      <F.FolderHeader>
        <F.FolderHeaderTitle>
          <U.ChevronDownWrapper>
            <ChevronDown />
          </U.ChevronDownWrapper>
          <span>Fuck</span>
        </F.FolderHeaderTitle>
        <F.FolderHeaderBtns>
          {headerBtns.map((icon, i) => (
            <button key={i}>
              <img src={icon.src} alt={icon.alt} />
            </button>
          ))}
        </F.FolderHeaderBtns>
      </F.FolderHeader>
      <F.Body>
        {folders.map((folder) => (
          <Folder key={folder.key} folder={folder} depth={0} />
        ))}
        {files.map((file) => (
          <File key={file.key} file={file} depth={0} />
        ))}
      </F.Body>
    </F.FileExplorer>
  );
};

const HBar: React.FC = () => (
  <F.H_Bar>
    <div />
    <div />
    <div />
  </F.H_Bar>
);

export default FileExplorer;

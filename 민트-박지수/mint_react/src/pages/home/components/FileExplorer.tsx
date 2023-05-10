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
import { CustomFolder } from '../../../lib/customFolder';
import { CustomFile } from '../../../lib/customFile';
import { useFolder } from '../../../context/useFolder/useFolder';

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

declare global {
  interface Window {
    dirHandle: FileSystemDirectoryHandle;
    showDirectoryPicker: (options?: { mode?: 'read' | 'readwrite' }) => Promise<FileSystemDirectoryHandle>;
  }
  interface FileSystemDirectoryHandle {
    entries: () => [string, FileSystemFileHandle | FileSystemDirectoryHandle][];
    values: () => AsyncIterableIterator<FileSystemFileHandle | FileSystemDirectoryHandle>;
  }
}

const FileExplorer: React.FC = () => {
  const { root, setRoot } = useFolder();
  async function onNewFolderSelect() {
    const dirHandle = await window.showDirectoryPicker();
    if (!dirHandle) {
      // User cancelled, or otherwise failed to open a file.
      console.log('hi');
      return;
    }
    const rootFolder = await getFolders(dirHandle);
    setRoot(rootFolder);
  }

  async function getFolders(dirHandle: FileSystemDirectoryHandle): Promise<CustomFolder> {
    console.log('파일 탐색 중');

    const files: CustomFile[] = [];
    const folders: CustomFolder[] = [];
    for await (const handle of dirHandle.values()) {
      if (handle.kind === 'file') {
        const file = await handle.getFile();
        files.push(new CustomFile(file.name));
      } else {
        folders.push(await getFolders(handle));
      }
    }
    const folder = new CustomFolder(dirHandle.name, folders, files);
    return folder;
  }

  return (
    <F.FileExplorer>
      <F.Header>
        <span>EXPLORER</span>
        <HBar />
      </F.Header>
      {!root && (
        <F.Body folderOpened={false}>
          <span>아직 폴더를 열지 않았습니다.</span>
          <F.OpenBtn onClick={onNewFolderSelect}>
            {/* <input type='file' web/> */}
            <span>폴더 열기</span>
          </F.OpenBtn>
          <F.OpenBtn>최근 파일 열기</F.OpenBtn>
          <span>복제 없이 원격 리포지토리를 열거나 요청을 가져올 수 있습니다.</span>
          <F.OpenBtn>원격 리포지토리 열기</F.OpenBtn>
        </F.Body>
      )}

      {root && (
        <>
          <F.FolderHeader>
            <F.FolderHeaderTitle>
              <U.ChevronDownWrapper>
                <ChevronDown />
              </U.ChevronDownWrapper>
              <span>{root.name}</span>
            </F.FolderHeaderTitle>
            <F.FolderHeaderBtns>
              {headerBtns.map((icon, i) => (
                <button key={i}>
                  <img src={icon.src} alt={icon.alt} />
                </button>
              ))}
            </F.FolderHeaderBtns>
          </F.FolderHeader>
          <F.Body folderOpened>
            {root.folders.map((folder) => (
              <Folder key={folder.key} folder={folder} depth={0} />
            ))}
            {root.files.map((file) => (
              <File key={file.key} file={file} depth={0} />
            ))}
          </F.Body>
        </>
      )}
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

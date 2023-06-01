import { CustomFile } from './CustomFile';
import uuid from 'react-uuid';

export class CustomFolder {
  key: string; // 고유한 키
  name: string; // 폴더 명
  depth: number; // 0부터 시작
  folders: CustomFolder[] = [];
  files: CustomFile[] = [];
  constructor(name: string, folders: CustomFolder[] = [], files: CustomFile[] = [], depth = 0) {
    this.key = uuid();
    this.name = name;
    this.depth = depth;
    if (folders) {
      for (let folder of folders) {
        this.addFolder(folder);
      }
    }
    if (files) {
      for (let file of files) {
        this.addFile(file);
      }
    }
  }
  addFile(file: CustomFile | CustomFile[]) {
    if (Array.isArray(file)) {
      file.forEach((f) => (f.depth = this.depth + 1));
      this.files.push(...file);
    } else {
      file.depth = this.depth + 1;
      this.files.push(file);
    }
    this.sortFiles();
  }
  addFolder(folder: CustomFolder | CustomFolder[]) {
    if (Array.isArray(folder)) {
      for (let f of folder) {
        this.folders.push(this.plusDepthAllFolder(f));
      }
    } else {
      this.folders.push(this.plusDepthAllFolder(folder));
    }
    this.sortFolders();
  }

  private plusDepthAllFolder(folder: CustomFolder) {
    folder.depth += 1;
    folder.folders = folder.folders.map((f) => this.plusDepthAllFolder(f));
    return folder;
  }
  sortFiles() {
    this.files.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }
  sortFolders() {
    this.folders.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }
}

export const dummyFolder = (() => {
  const folder = new CustomFolder('src');
  folder.addFolder([
    new CustomFolder('components', [
      new CustomFolder('styles'),
      new CustomFolder('utils', [], [new CustomFile('styleUtility.tsx')]),
    ]),
    new CustomFolder('pages', [
      new CustomFolder(
        'home',
        [new CustomFolder('components'), new CustomFolder('hooks')],
        [new CustomFile('Home.styled.tsx'), new CustomFile('Home.tsx')]
      ),
      new CustomFolder('page404'),
    ]),
    new CustomFolder('types', [], [new CustomFile('format.d.ts'), new CustomFile('types.ts')]),
    new CustomFolder('assets', [new CustomFolder('icon'), new CustomFolder('images')]),
  ]);
  return folder;
})();

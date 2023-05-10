import { Record, Set } from 'immutable';
import { CustomFile } from './customFile';
import uuid from 'react-uuid';
import { addFolderToFolder } from './folderUitility';

// 불변 객체로 만들자니 효율이 너무 떨어지고
// 가변 객체로 만들자니 변경 시 state 트리거가 안된다.

export class CustomFolder extends Record<{
  key: string;
  name: string;
  folders: Set<CustomFolder>;
  files: Set<CustomFile>;
  dirHandle: FileSystemDirectoryHandle | null;
}>(
  {
    key: '',
    name: '',
    folders: Set<CustomFolder>(),
    files: Set<CustomFile>(),
    dirHandle: null,
  },
  'CustomFolder'
) {
  constructor(name: string, folders: CustomFolder[] = [], files: CustomFile[] = []) {
    super({ key: uuid(), name, folders: Set(folders), files: Set(files) });
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
  let folder = new CustomFolder('src');
  folder = addFolderToFolder(folder, [
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

import { CustomFile } from './customFile';
import { CustomFolder } from './customFolder';
import { Set } from 'immutable';

export function addFileToFolder(folder: CustomFolder, fileToAdd: CustomFile | CustomFile[]): CustomFolder {
  if (Array.isArray(fileToAdd)) {
    return folder.set('files', folder.files.union(fileToAdd));
  } else {
    return folder.set('files', folder.files.add(fileToAdd));
  }
}

export function addFolderToFolder(folder: CustomFolder, folderToAdd: CustomFolder[]): CustomFolder {
  if (Array.isArray(folderToAdd)) {
    return folder.set('folders', folder.folders.union(folderToAdd));
  } else {
    return folder.set('folders', folder.folders.add(folderToAdd));
  }
}

export function sortedFiles(f: Set<CustomFile>) {
  return f.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}
export function sortedFolders(f: Set<CustomFolder>) {
  return f.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}

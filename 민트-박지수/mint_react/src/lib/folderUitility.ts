import { CustomFile } from './customFile';
import { CustomFolder } from './customFolder';

function addFileToFolder(forder: CustomFolder, fileToAdd: CustomFile | CustomFile[]): CustomFolder {
  if (Array.isArray(fileToAdd)) {
    return forder.set('files', forder.files.union(fileToAdd));
  } else {
    return forder.set('files', forder.files.add(fileToAdd));
  }
}

function addFolderToFolder(forder: CustomFolder, folderToAdd: CustomFolder[]): CustomFolder {
  if (Array.isArray(folderToAdd)) {
    return forder.set('folders', forder.folders.union(folderToAdd));
  } else {
    return forder.set('folders', forder.folders.add(folderToAdd));
  }
}

export { addFileToFolder, addFolderToFolder };

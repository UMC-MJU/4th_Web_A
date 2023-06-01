import { Queue } from '../../lib/queue';
import { CustomFolder } from '../../pages/home/hooks/CustomFolder';

export function findParentFolder(key: string, rootFolder: CustomFolder): CustomFolder | null {
  const queue = new Queue<CustomFolder>();
  queue.push(rootFolder);
  while (queue.size) {
    const folder = queue.pop();
    for (let childFolder of folder.folders) {
      if (childFolder.key === key) return folder;
      queue.push(childFolder);
    }
    for (let file of folder.files) {
      if (file.key === key) return folder;
    }
  }
  return null;
}

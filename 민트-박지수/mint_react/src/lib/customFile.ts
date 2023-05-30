import uuid from 'react-uuid';
import { Record } from 'immutable';

export class CustomFile extends Record<{ key: string; name: string; fileHandle: FileSystemFileHandle | null }>(
  { key: '', name: '', fileHandle: null },
  'CustomFile'
) {
  constructor(name: string, fileHandle: FileSystemFileHandle | null) {
    super({ key: uuid(), name, fileHandle });
  }
}

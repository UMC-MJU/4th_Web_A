import uuid from 'react-uuid';

export class CustomFile {
  key: string;
  name: string;
  depth: number;
  constructor(name: string, depth = 0) {
    this.key = uuid();
    this.name = name;
    this.depth = depth;
  }
}

import uuid from 'react-uuid';
import { Record } from 'immutable';

export class CustomFile extends Record({ key: '', name: '' }, 'CustomFile') {
  constructor(name: string) {
    super({ key: uuid(), name });
  }
}

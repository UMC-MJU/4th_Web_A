export class Queue<T> {
  private first: Item<T> | null = null;
  private last: Item<T> | null = null;
  size = 0;
  constructor(list: Array<T> = []) {
    for (const item of list) {
      this.push(item);
    }
  }

  push(item: T) {
    const newItem = new Item<T>(item);
    if (this.size === 0) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last!.next = newItem;
      this.last = newItem;
    }

    this.size += 1;
  }

  pop(): T {
    if (!this.first) {
      throw new Error('큐가 비어있습니다');
    }
    const item = this.first;
    this.first = item.next;
    this.size -= 1;
    if (this.size === 0) {
      this.first = null;
      this.last = null;
    }
    return item.key;
  }

  getFirst() {
    if (!this.first) {
      throw new Error('큐가 비어있습니다');
    }
    return this.first.key;
  }
}

class Item<T> {
  key: T;
  next: Item<T> = this;
  constructor(key: T) {
    this.key = key;
  }
}

export class Store {
  constructor() {
  }

  _count = 0;
  get count() {
    return this._count;
  }

  set count(val) {
    this._count = val;
  }

  incrementCount() {
    this.count = this.count + 1;
  }

}
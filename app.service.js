export class AppService {
  constructor() {
    this.callbacks = [];
  }

  subscribe(callback) {
    var handler = callback;
    this.callbacks.push(handler);
    return handler;
  }

  emit(data) {
    for (let callback of this.callbacks) {
      callback(data);
    }
  }

  unsubscribe(handler){
    for (var i = 0; i < this.callbacks.length; i++) {
			if (handler === this.callbacks[i]) {
				this.callbacks.splice(i, 1);
				break;
			}
		}
  }
}
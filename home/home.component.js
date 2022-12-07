class HomeCtrl {
  static $inject = ['appService', 'dialogService', 'alertService', 'store'];

  constructor(appService, dialogService, alertService, store) {
    this.appService = appService;
    this.alertService = alertService;
    this.dialogService = dialogService;
    this.store = store;
  }

  showDialog() {
    this.dialogService.show('Hello Dialog', 'Some Dialog Content.')
      .then((res) => {
        this.alertService.show('OK!', 'You clicked ok', { id: 'OK_ID' });
      })
      .catch((err) => {
        this.alertService.show('CANCELED!', 'You clicked cancel', { type: 'danger', id: 'CANCEL_ID' });
      });
  }

  messageSubscription() {
    this.appService.emit('HomeComponent: some message');
  }

  showRandomAlert() {
    let alertTypes = ['primary', 'info', 'warning', 'success', 'danger'];
    let rndTypeIndex = Math.floor(Math.random() * alertTypes.length) + 1;
    this.alertService.show('Test!', 'Some test text', { type: alertTypes[rndTypeIndex] });
  }

  incrementCount() {
    this.store.incrementCount();
  }
}

export default {
  bindings: {},
  templateUrl: 'home/home.component.html',
  controller: HomeCtrl
}
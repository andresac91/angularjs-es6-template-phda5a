class AppCtrl {
  static $inject = ['$rootScope', 'appService', '$state', 'dialogService', 'alertService', 'store'];
  constructor($rootScope, appService, $state, dialogService, alertService, store) {
    this.$rootScope = $rootScope;
    this.appService = appService;
    this.$state = $state;
    this.dialogService = dialogService;
    this.alertService = alertService;
    this.store = store;

    this.dialog;
    this.alert;

    this.subscription;
    this.subscription = appService.subscribe((message) => {
      alert(message);
    });
    this.currentState;
  }

  $onInit() {
    this.$rootScope.$on('transition-on-success', () => {
      this.currentState = this.$state.$current;
    });
  }

  $postLink() {
    this.dialogService.register(this.dialog);
    this.alertService.register(this.alert);
  }

  $onDestroy() {
    this.appService.unsubscribe(this.subscription);
  }
}

export default {
  bindings: {},
  templateUrl: 'app.component.html',
  controller: AppCtrl
}
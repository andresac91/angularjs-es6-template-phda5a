class AlertCtrl {
  static $inject = ['$scope'];
  constructor($scope) {
    this.$scope = $scope;
    this.alerts = [];
  }

  $onInit() {
    //this.onRef({ ref: this });
  }

  addAlert(alert) {
    this.alerts.unshift(alert);
    setTimeout(() => {
      this.removeAlert(alert.id);
      this.$scope.$apply();
    }, alert.duration);
  }

  removeAlert(id) {
    let alert = this.alerts.find(a => a.id == id);
    if (alert) {
      alert.onCancel ? alert.onCancel() : undefined;
      let indexToRemove = this.alerts.indexOf(alert);
      this.alerts.splice(indexToRemove, 1);
    }
  }

  cancelClicked(id) {
    this.removeAlert(id);
  }

}

export default {
  bindings: {
    //onRef: '&?'
  },
  templateUrl: 'globals/components/alert/alert.component.html',
  controller: AlertCtrl
}
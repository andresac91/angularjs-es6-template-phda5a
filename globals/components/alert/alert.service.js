export class AlertService {
  static $inject = ['$q'];
  constructor($q) {
    this.$q = $q;
    this.registeredAlert;
  }

  register(alert) {
    this.registeredAlert = alert;
  }

  show(title, description, config = { id, type, duration, onOk, onCancel }) {
    return this.$q((resolve, reject) => {
      let newAlert = {
        isShown: false,
        title: title,
        description: description,
        type: config.type ? config.type : 'primary',
        duration: config.duration ? config.duration : 2000,
        id: config.id ? config.id : Math.random() * 1000,
        onOk: config.onOk,
        onCancel: config.onCancel
      };

      this.registeredAlert.addAlert(newAlert);

    });
  }
}
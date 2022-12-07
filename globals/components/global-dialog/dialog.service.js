export class DialogService {
  static $inject = ['$q'];
  constructor($q) {
    this.$q = $q;
    this.registeredDialog;
  }

  register(dialog) {
    this.registeredDialog = dialog;
  }

  show(title, description, config) {
    return this.$q((resolve, reject) => {

      this.registeredDialog.title = title;
      this.registeredDialog.description = description;
      this.registeredDialog.okButtonText = config && config.okButtonText ? config.okButtonText : 'ok';
      this.registeredDialog.cancelButtonText = config && config.cancelButtonText ? config.cancelButtonText : 'cancel';
      this.registeredDialog.show();
      this.registeredDialog.onOk = () => {
        this.registeredDialog.hide();
        resolve();
      };

      this.registeredDialog.onCancel = () => {
        this.registeredDialog.hide();
        reject();
      };

    });
  }

}
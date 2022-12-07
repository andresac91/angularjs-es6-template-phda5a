class GenericDialogCtrl {
  constructor() {
  }

  title = '';
  description = '';
  showDialog = false;
  backdrop = undefined;

  $onInit() {
  }

  show() {
    document.body.classList.add('modal-open');
    this.showDialog = true;
    this.showBackdrop();
  }

  hide() {
    document.body.classList.remove('modal-open');
    this.showDialog = false;
    this.hideBackdrop();
  }

  showBackdrop() {
    this.backdrop = document.createElement('div');
    this.backdrop.classList.add('modal-backdrop');
    this.backdrop.classList.add('show');
    document.body.appendChild(this.backdrop);
  }

  hideBackdrop() {
    this.backdrop.remove();
  }

}

export default {
  bindings: {},
  templateUrl: 'globals/components/global-dialog/global-dialog.component.html',
  controller: GenericDialogCtrl
}
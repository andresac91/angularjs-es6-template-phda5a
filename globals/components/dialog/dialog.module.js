import * as angular from 'angular';
import dialogComponent from './dialog.component';
import dialogHeaderComponent from './dialog-header.component';
import dialogBodyComponent from './dialog-body.component';
import dialogFooterComponent from './dialog-footer.component';

export default angular.module('dialogmodule', [])
  .component('appDialog', dialogComponent)
  .component('appDialogHeader', dialogHeaderComponent)
  .component('appDialogBody', dialogBodyComponent)
  .component('appDialogFooter', dialogFooterComponent)
  .name;
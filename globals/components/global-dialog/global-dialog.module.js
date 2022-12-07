import * as angular from 'angular';
import globalDialogComponent from './global-dialog.component';
import { DialogService } from './dialog.service';

export default angular.module('globaldialogModule', [])
  .component('appGlobalDialog', globalDialogComponent)
  .service('dialogService', DialogService)
  .name;
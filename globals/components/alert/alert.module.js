import * as angular from 'angular';
import alertComponent from './alert.component';
import { AlertService } from './alert.service';

export default angular.module('alertmodule', [])
  .component('appAlert', alertComponent)
  .service('alertService', AlertService)
  .name;
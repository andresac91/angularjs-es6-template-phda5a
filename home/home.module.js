import * as angular from 'angular';
import homeComponent from './home.component';

export default angular.module('home', [])
  .component('home', homeComponent)
  .name;
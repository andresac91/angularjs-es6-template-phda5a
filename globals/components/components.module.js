import * as angular from 'angular';
import breadcrumbComponent from './breadcrumb/breadcrumb.component';
import chooseLanguageComponent from './choose-language/choose-language.component';
import alertModule from './alert/alert.module';
import dialogModule from './dialog/dialog.module';
import globaldialogModule from './global-dialog/global-dialog.module';


export default angular.module('components', [alertModule, dialogModule, globaldialogModule])
  .component('appBreadcrumb', breadcrumbComponent)
  .component('chooseLanguage', chooseLanguageComponent)
  .name;
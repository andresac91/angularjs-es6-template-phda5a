import angular from 'angular';
import * as uiRouter from '@uirouter/angularjs';
import uiBootstrap4 from 'ui-bootstrap4';
import ngTranslate from 'angular-translate';
import ngAnimate from 'angular-animate';

import './style';

import routes from './app.routes';
import translations from './app.translations';
import { AppService } from './app.service';
import appComponent from './app.component';
import { Store } from './store';
import homeModule from './home/home.module';
import globalsModule from './globals/globals.module';

angular.module('app', [uiRouter.default, ngTranslate, ngAnimate, uiBootstrap4, globalsModule, homeModule]);

angular.module('app').config(routes);
angular.module('app').config(translations);
//https://docs.angularjs.org/guide/production
angular.module('app').config(['$compileProvider', function ($compileProvider) {
  $compileProvider.debugInfoEnabled(true);
  $compileProvider.strictComponentBindingsEnabled(true);
  $compileProvider.commentDirectivesEnabled(false);
  $compileProvider.cssClassDirectivesEnabled(false);
}]);

angular.module('app').run(['$rootScope', '$transitions', function ($rootScope, $transitions) {
  $transitions.onSuccess({}, () => {
    $rootScope.$emit('transition-on-success');
  });
}]);

angular.module('app').component('appRoot', appComponent);
angular.module('app').service('appService', AppService);
angular.module('app').service('store', Store);
angular.bootstrap(document.getElementById('app'), ['app'], { strictDi: true });
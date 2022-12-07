import * as angular from 'angular';

import { ColorDirective } from './directives/color.directive';
import { RefDirective } from './directives/ref.directive';
import componentsModule from './components/components.module';

export default angular.module('globals', [componentsModule])
  .directive('color', ColorDirective)
  .directive('ref', RefDirective)
  .name;
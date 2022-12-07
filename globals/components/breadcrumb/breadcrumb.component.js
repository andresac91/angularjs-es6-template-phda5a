import { StateObject } from '@uirouter/core';

class BreadcrumbController {
  items;

  set currentState(val) {
    this.items = this.getItems(val, true).reverse();
  }

  getItems(item, isCurrent = false) {
    let result = [];
    if (item && item.name) {
      result.push({ name: item.name, title: item['breadcrumb'] ? item['breadcrumb'].title : undefined, isCurrent: isCurrent });
      if (item.parent) {
        result.push(...this.getItems(item.parent));
      }
    }
    return result;
  }
}

export default {
  bindings: {
    currentState: '<'
  },
  template:
    `<nav>
			<ol class="breadcrumb">
	  			<li class="breadcrumb-item" ng-repeat="item in $ctrl.items" ng-class="{ 'active':item.isCurrent }">{{ 'STATES.' + item.title | translate}}</li>
			</ol>
  		</nav>`,
  controller: BreadcrumbController
};
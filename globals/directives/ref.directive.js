export class RefDirective {
  static $inject = ['$parse'];
  constructor($parse) {
    return {
      restrict: "A",
      link: ($scope, $element, $attrs) => {
        let tagName = $attrs.refOf || $attrs.$normalize($element[0].tagName.toLowerCase());
        let instance = $element.controller(tagName);

        if (!instance && !$attrs.refOf) {
          instance = $element[0];
        }
        
        $parse($attrs.ref).assign($scope, instance);
      }
    };
  }
}
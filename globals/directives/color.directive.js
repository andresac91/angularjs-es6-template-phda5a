export class ColorDirective {
  constructor() {
    return {
      restrict: "A",
      scope: {
        color: '<'
      },
      link: function ($scope, elem, attr) {
        elem.css("color", attr.color);
      }
    };
  }
}
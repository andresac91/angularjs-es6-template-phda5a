export default function routes($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state({ name: 'home', url: '/', component: 'home', breadcrumb: { title: 'HOME' } });
}
routes.$inject = ['$urlRouterProvider', '$stateProvider'];
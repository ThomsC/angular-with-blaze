(function() {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    routeConfig.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];

    function routeConfig($urlRouterProvider, $stateProvider, $locationProvider)
    {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/accueil');
    };
    ;

})();
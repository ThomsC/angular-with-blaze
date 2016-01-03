(function () {
    'use strict';

    angular
        .module('app')
        .config(routeDashboard);

    routeDashboard.$inject = ['$stateProvider'];

    function routeDashboard($stateProvider) {
        $stateProvider
            .state('accueil', {
                url: '/accueil',
                views: {
                    main: {
                        templateUrl: 'client/app/accueil/accueil.ng.html',
                        controller: 'accueilController',
                        controllerAs: 'vm'
                    }
                }
            });
    };

})();
(function() {
    'use strict';

    angular.module('app', [
        'angular-meteor',
        'ui.router',
    ]);

    function onReady() {
        angular.bootstrap(document, ['app']);
    }

    if (Meteor.isCordova)
        angular.element(document).on('deviceready', onReady);
    else
        angular.element(document).ready(onReady);

})();

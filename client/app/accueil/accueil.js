(function() {
    'use strict';

    angular
        .module('app')
        .controller('accueilController', accueilController);

    //accueilController.$inject = [];

    function accueilController()
    {
        var vm = this;
        vm.version = '1.3.4';
    };

})();
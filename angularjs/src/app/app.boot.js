(function () {
    'use strict';

    console.log('AngularJs 1.x - Creating "Application" Module');

    angular
        .module('application', [
            'templates-app',
            'templates-common',
            'application.home',
            'ui.router',
            'pascalprecht.translate'
        ])
        .run(run);

    function run($rootScope, $state) {
        console.log('AngularJs 1.x - Initialized');

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            // react on state change events
        });
    }
})();

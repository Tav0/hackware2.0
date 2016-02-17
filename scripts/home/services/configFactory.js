(function () {
    'use strict';
	// CONFIGURATION FACTORY

    angular.element(document).ready(function () {
        $.get('/scripts/home/services/config.json', function (data) {

            angular.module('home')
                .factory('configuration', configurationService); // adding the configuration factory, could be provider

            function configurationService() {
                var tmpConfig = data; // loaded before all the other includes
                    tmpConfig.apiUrl = tmpConfig.settings.api.url + '/api/' + tmpConfig.settings.api.version;
                return tmpConfig;
            }

            angular.bootstrap(document, ['hackware']); // manually bootstrap the app after we get the config.
        });
    });
}());

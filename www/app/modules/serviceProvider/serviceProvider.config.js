'use strict';

var serviceProviderModule = angular.module('serviceProvider.module',[]);

serviceProviderModule.config(function config($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('serviceProviderHome', {
      url: '/serviceProviderHome',
      templateUrl: 'app/modules/serviceProvider/templates/service_provider_home.html',
      controller: 'ServiceProviderHomeCtrl'
    })
});

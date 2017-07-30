'use strict';

var shopModule = angular.module('shop.module',[]);

shopModule.config(function config($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'app/modules/shop/templates/home_2.html',
      controller: 'HomeCtrl'
    })
    .state('wish-list', {
      url: '/wish-list',
      templateUrl: 'app/modules/shop/templates/wish-list.html',
      controller: 'WishListCtrl'
    })
    .state('item-list', {
      url: '/item-list',
      templateUrl: 'app/modules/shop/templates/item-list.html',
      controller: 'ItemListCtrl'
    })
    .state('service-provider', {
      url: '/service-provider',
      templateUrl: 'app/modules/shop/templates/service-provider.html',
      controller: 'ServiceProviderCtrl'
    })
});

'use strict';

AppRoute.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
export default function AppRoute($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false).hashPrefix('!');
  $urlRouterProvider.otherwise('/signIn');
}

'use strict';

configRoutes.$inject = ['$stateProvider'];
export default function configRoutes($stateProvider) {
  $stateProvider
    .state('signIn', {
      url: '/signIn',
      templateUrl: 'modules/signIn/signIn.html',
      controller: 'SignInController',
      controllerAs: 'SignInCtrl'
    });
}

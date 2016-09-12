'use strict';

AppConfig.$inject = ['$httpProvider'];
export default function AppConfig($httpProvider) {
  $httpProvider.interceptors.push('HttpInterceptorService');
}

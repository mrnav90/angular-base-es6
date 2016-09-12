'use strict';

import {Inject} from '../common/app.decorators';
import AppService from '../base/app.service';

Inject('$http', '$q', '$localStorage')
export default class AuthService extends AppService {
  constructor($http, $q, $localStorage) {
    super($http, $q, $localStorage);
  }

  signIn(params) {
    let deferred = this.$q.defer();
    let requestParams = this.buildRequestParam('POST', 'login', params);
    this.$http(requestParams).success(response => {
      deferred.resolve(response);
    }).error(function(error) {
      deferred.reject(error);
    });

    return deferred.promise;
  }

  signOut() {
  	let deferred = this.$q.defer();
    let requestParams = this.buildRequestParam('GET', 'logout');
    this.$http(requestParams).success(response => {
      deferred.resolve(response);
    }).error(function(error) {
      deferred.reject(error);
    });

    return deferred.promise;
  }
}

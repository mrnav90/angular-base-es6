'use strict';

import {Inject} from '../common/app.decorators';
import AppService from '../base/app.service';

Inject('$http', '$q', '$localStorage')
export default class UserService extends AppService {
  constructor($http, $q, $localStorage) {
    super($http, $q, $localStorage);
  }

  get() {
    let deferred = this.$q.defer();
    let requestParams = this.buildRequestParam('GET', 'admins/me', null, true);
    this.$http(requestParams).success(response => {
      deferred.resolve(response);
    }).error(function(error) {
      deferred.reject(error);
    });

    return deferred.promise;
  }
}

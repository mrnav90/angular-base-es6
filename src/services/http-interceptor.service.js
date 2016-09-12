'use strict';

import {Inject} from '../common/app.decorators';
import {APP_API} from '../config/app.constant';
import AuthModel from '../models/auth.model';

Inject('$q', '$localStorage', '$rootScope')
export default class HttpInterceptorService {
  constructor($q, $localStorage, $rootScope) {
    this.$q = $q;
    this.$rootScope = $rootScope;
    this.AuthModel = new AuthModel($localStorage);
    return {
      request: this.request.bind(this),
      requestError: this.requestError.bind(this),
      response: this.responseError.bind(this),
      responseError: this.responseError.bind(this)
    }
  }

  request(config) {
    if (this.AuthModel.isAuthenticated() && config.url.indexOf(APP_API) === 0) {
      config.headers['Authorization'] = 'Bearer '+ this.AuthModel.getAccessToken();
    }
    return config || this.$q.when(config);
  }

  requestError(rejection) {
    return rejection;
  }

  response(data) {
    return data;
  }

  responseError(rejection) {
    let statusCode = rejection.status;
    switch (statusCode) {
      case 401:
        this.$rootScope.$broadcast('Error401');
      break;
      case 403:
        this.$rootScope.$broadcast('Error401');
      break;
      case 404:
        if (rejection.config.method == 'GET') {
          this.$rootScope.$broadcast('Error404');
        }
      break;
      case 500:
      break;
    }
    return rejection;
  }
}

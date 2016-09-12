'use strict';

import {APP_API} from '../config/app.constant';
import AuthModel from '../models/auth.model';

export default class AppService {
  constructor($http, $q, $localStorage) {
    this.$http = $http;
    this.$q = $q;
    this.AuthModel = new AuthModel($localStorage);
  }

  buildRequestParam(method, path, params) {
  	let requestParams = {
  		url: APP_API + path
  	};
  	switch (method) {
  		case 'POST':
  			requestParams.method = method;
  			if (params) {
  				requestParams.data = params;
  			}
  			requestParams.headers = this.AuthModel.getHeaders();
  		break;
  		case 'GET':
  			requestParams.method = method;
  			if (params) {
  				requestParams.data = params;
  			}
  			requestParams.headers = this.AuthModel.getHeaders();
  		break;
  		case 'PUT':
  		break;
  		case 'DELETE':
  		break;
  		case 'PATCH':
  		break;
  		case 'OPTIONS':
  		break;
  	}
  	return requestParams;
  }
}

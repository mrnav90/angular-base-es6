'use strict';

import AuthService from './auth.service';
import UserService from './user.service';
import HttpInterceptorService from './http-interceptor.service';

export default angular.module('jinjer.services', [])
.service('AuthService', AuthService)
.service('HttpInterceptorService', HttpInterceptorService)
.service('UserService', UserService).name

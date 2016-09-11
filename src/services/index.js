'use strict';

import AuthService from './auth.service';
import UserService from './user.service';

export default angular.module('jinjer.services', [])
.service('AuthService', AuthService)
.service('UserService', UserService).name

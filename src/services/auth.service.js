'use strict';

import {Inject} from '../common/app.decorators';
import AppService from '../base/app.service';

Inject('$http', '$q')
export default class AuthService extends AppService {
  constructor($http, $q) {
    super($http, $q);
  }

  signIn() {
    console.log('it works');
  }
}

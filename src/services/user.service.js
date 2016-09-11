'use strict';

import {Inject} from '../common/app.decorators';
import AppService from '../base/app.service';

Inject('$http', '$q')
export default class UserService extends AppService {
  constructor($http, $q) {
    super($http, $q);
  }
}

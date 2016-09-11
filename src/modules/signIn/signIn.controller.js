'use strict';

import {Inject} from '../../common/app.decorators';
import AppController from '../../base/app.controller';
import './signIn.scss';

Inject('$state', 'toastr', '$filter', 'AuthService')
export default class SignInController extends AppController {
  constructor($state, toastr, $filter, AuthService) {
    super($filter);
    this.input = {
      email: null,
      password: null
    }
    this.loading = false;
  }

  submit(signInForm) {

  }
}

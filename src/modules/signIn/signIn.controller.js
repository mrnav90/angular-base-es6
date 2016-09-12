'use strict';

import {Inject} from '../../common/app.decorators';
import AppController from '../../base/app.controller';
import './signIn.scss';

Inject('$state', 'toastr', '$filter', 'AuthService')
export default class SignInController extends AppController {
  constructor($state, toastr, $filter, AuthService) {
    super($filter);
    this.AuthService = AuthService;
    this.input = {
      email: null,
      password: null
    }
    this.loading = false;
  }

  submit(signInForm) {
    if (signInForm.$valid) {
      this.loading = true;
      this.AuthService.signIn(this.input).then(response => {
        if (response.status === 'success') {

        }
        this.loading = false;
      }, error => {
        
      });
    }
  }
}

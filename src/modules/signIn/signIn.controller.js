'use strict';

import {Inject} from '../../common/app.decorators';
import AppController from '../../base/app.controller';
import AuthModel from '../../models/auth.model';
import UserModel from '../../models/user.model';
import './signIn.scss';

Inject('$state', 'toastr', '$filter', 'AuthService', 'UserService', '$localStorage')
export default class SignInController extends AppController {
  constructor($state, toastr, $filter, AuthService, UserService, $localStorage) {
    super($filter);
    this.AuthService = AuthService;
    this.UserService = UserService;
    this.UserModel = UserModel;
    this.$state = $state;
    this.AuthModel = new AuthModel($localStorage);
    this.toastr = toastr;
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
          this.AuthModel.setAccessToken(response.data.api_token);
          this.UserService.get().then(response => {
            this.AuthModel.setUserInfo(new this.UserModel(response.data));
            this.$state.go('dashboard.listAdmin');
            this.loading = false;
          }, error => {
            this.toastr.error(error.message, 401);
            this.loading = false;
          });
        } else {
          this.toastr.error(response.message, 401);
          this.loading = false;
        }
      }, error => {
        this.toastr.error(error.message, 401);
        this.loading = false;
      });
    } else {
      this.toastr.error('Please fill the form!', 400);
    }
  }
}

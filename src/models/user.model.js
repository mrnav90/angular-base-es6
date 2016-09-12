'use strict';

import AppModel from '../base/app.model';

export default class UserModel extends AppModel {
  constructor(object) {
    super(object);
  }

  getEmail() {
    return super.get('email');
  }

  getName() {
    return super.get('full_name');
  }

  getDepartment() {
    return super.get('department');
  }
}

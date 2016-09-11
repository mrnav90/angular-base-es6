'use strict';

import SignInController from './signIn.controller';
import SignInRoutes from './signIn.route';

export default angular.module('Jinjer.signIn', [])
.config(SignInRoutes)
.controller('SignInController', SignInController)
.name;

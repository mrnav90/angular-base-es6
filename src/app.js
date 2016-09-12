'use strict';

import angular from 'angular';
import jQuery from 'jquery';
import $ from 'jquery';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'angular-toastr/dist/angular-toastr.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/scss/font-awesome.scss';
import './common/app.common.scss'
import 'ladda/css/ladda.scss';
import 'ladda/dist/spin.min.js';
import 'ladda/dist/ladda.min.js';
import 'angular-toastr/dist/angular-toastr.tpls.min.js';
import 'angular-ladda';
import 'ngstorage';
import appDecorators from './common/app.decorators';
import appConfig from './config/app.config';
import appRun from './config/app.run';
import appRoute from './config/app.route';
import appComponents from './components';
import appServices from './services';
import signIn from './modules/signIn';
import './app.templates';

angular.module('Jinjer', [
  'ui.router',
  'ui.bootstrap',
  'toastr',
  'angular-ladda',
  'ngStorage',
  'templates',
  appDecorators,
  appComponents,
  appServices,
  signIn
])
.config(appConfig)
.config(appRoute)
.run(appRun);

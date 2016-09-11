'use strict';

import { APP_LIMIT } from '../config/app.config';

export default class AppController {
  constructor($filter) {
    this.$filter = $filter;
    this.page = 1;
    this.limit = 10;
    this.offset = 0;
    this.total = 0;
    this.pageSize = 10;
    this.loadingPage = false;
  }

  setPage(number) {
    let page = parseInt(number) || 0;
    this.page = Math.min(page, 1) >= 1 ? page : 1;
    this.offset = (this.page - 1) * this.pageSize;
  }

  setLimit(number) {
    let limit = parseInt(number) || APP_LIMIT;
    this.limit = Math.min(limit, 1) >= 1 ? limit : APP_LIMIT;
  }

  setTotal(number) {
    let total = parseInt(number) || 0;
    this.total = Math.min(total, 1) >= 1 ? total : 0;
  }
}

'use strict';

export default class AuthModel {
	constructor($localStorage) {
		this.$localStorage = $localStorage;
	}

	setUserInfo(userInfo) {
		this.$localStorage.userInfo = userInfo;
	}

	getUserInfo() {
		return this.$localStorage.userInfo;
	}

	setAccessToken(token) {
		this.$localStorage.token = token;
	}

	getAccessToken() {
		return this.$localStorage.token;
	}

	getHeaders(isAuthenticated) {
		if (isAuthenticated) {
			return {
      	'Authorization': this.getAccessToken() ? 'Bearer '+this.getAccessToken() : '',
      	'Content-Type': 'application/json'
    	}
		} else {
			return {
      	'Content-Type': 'application/json'
    	}
		}
	}

	isAuthenticated() {
		return angular.isDefined(this.$localStorage.userInfo) && this.$localStorage.userInfo !== null;
	}
}
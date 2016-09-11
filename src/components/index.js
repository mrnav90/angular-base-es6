'use strict';

import footerComponent from './footer/footer.component';
import headerComponent from './header/header.component';
export default angular.module('jinjer.components', [])
.component('footerComponent', footerComponent)
.component('headerComponent', headerComponent).name;

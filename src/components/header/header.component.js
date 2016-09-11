'use strict';

import AppComponent from '../../base/app.component';

let options = {
  templateUrl: 'components/header/header.component.html',
  controller: HeaderComponent
}

class HeaderComponent extends AppComponent {
  constructor() {
    super();
  }
}

export default options;

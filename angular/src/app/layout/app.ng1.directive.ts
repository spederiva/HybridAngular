import { downgradeComponent } from '@angular/upgrade/static';

import { AppComponent } from './app.component';

angular.module('application')
    .directive(
        'appRoot',
        downgradeComponent({component: AppComponent})
    );
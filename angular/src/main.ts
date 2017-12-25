import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/layout/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

declare let angular: any;
declare let Ng1AppModule: any;


platformBrowserDynamic().bootstrapModule(AppModule)
    .then(ref => {
        console.log('Both Angular 5 and AngularJs 1.x versions were Initialized');

        console.log('*** Hybrid Angular Application is Running ***');
    })
    .catch(err => console.log(err));

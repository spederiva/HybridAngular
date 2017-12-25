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
        console.log('Both Angular Version were Initialized');
        //
        // (<any>ref.instance).upgrade.bootstrap(document.body, [Ng1AppModule.name]);
    })
    .catch(err => console.log(err));

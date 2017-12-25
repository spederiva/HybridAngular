import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';

import './app.ng1.directive';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    providers: [],
    //bootstrap: [AppComponent]
    entryComponents: [
        AppComponent
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) {

        console.log('Initializing AppModule');

    }

    ngDoBootstrap() {
        console.log('Initializing Angular 1 Main Module');

        this.upgrade.bootstrap(document.body, ['application'], { strictDi: false });
    }
}
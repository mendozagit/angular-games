import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgPrimeModule } from './ng-prime/ng-prime.module';
import { SharedModule } from './shared/shared.module';

//internacionalization settings
import localEsMX from '@angular/common/locales/es-MX';
import localFrCA from '@angular/common/locales/fr-CA';
import localDeCH from '@angular/common/locales/de-CH';

import { registerLocaleData } from '@angular/common';
registerLocaleData(localEsMX);
registerLocaleData(localFrCA);
registerLocaleData(localDeCH);

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        NgPrimeModule,
        SharedModule,
    ],
    providers: [{ provide: LOCALE_ID, useValue: 'es-MX' }],
    bootstrap: [AppComponent],
})
export class AppModule {}

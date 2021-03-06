import { BrowserModule } from '@angular/platform-browser';

/// formato en español
import { LOCALE_ID,NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/// formato en español
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

import {CapitalizadoPipe } from '../app/pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ConstraseniaPipe } from './pipes/constrasenia.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ConstraseniaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' }], 
  bootstrap: [AppComponent]
})
export class AppModule { }

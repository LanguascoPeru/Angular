import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// para poder utilizar en ng-model
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// importar rutas
///---- RUTAS
import { APP_ROUTING } from './app.routes';


////------ peticiones http
import { HttpClientModule } from '@angular/common/http' ;

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

/// ng-bootstrap datepicker
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DatepickerPopupComponent } from './components/datepicker-popup/datepicker-popup.component';

/// infinity scroll
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
 
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    DatepickerPopupComponent,
    InfiniteScrollComponent,
 
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

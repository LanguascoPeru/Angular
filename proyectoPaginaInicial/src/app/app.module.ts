import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// para poder utilizar en ng-model
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

////------ peticiones http
import { HttpClientModule } from '@angular/common/http' ;

// importar rutas
///---- RUTAS
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { VisorComponent } from './pages/visor/visor.component';


/// ng-bootstrap datepicker
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DatepickerPopupComponent } from './components/datepicker-popup/datepicker-popup.component';
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    VisorComponent,
    DatepickerPopupComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

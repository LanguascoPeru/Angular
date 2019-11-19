import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// importar rutas
///---- RUTAS
import { APP_ROUTING } from './app.routes.module';
////------ peticiones http
import { HttpClientModule } from '@angular/common/http' ;

// para poder utilizar en ng-model
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { MarcaComponent } from './pages/mantenimiento/marca/marca.component';
import { VehiculoComponent } from './pages/mantenimiento/vehiculo/vehiculo.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    MarcaComponent,
    VehiculoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

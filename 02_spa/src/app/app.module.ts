import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

///---- RUTAS
import { APP_ROUTING } from './app.routes';

//--- SERVICIOS

import { HeroesServices } from './services/heroes.service';

///--COMPONENTES----
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

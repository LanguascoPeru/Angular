import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//--- angular material
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//--- angular material
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';


///---- angular google maps
import { AgmCoreModule } from '@agm/core';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';

///-- formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  entryComponents: [ 
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAPu53t6NQF2Leb3ieMFMLbrVPv9wJZ6UE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

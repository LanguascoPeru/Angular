import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// para poder utilizar en ng-model
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

////------ peticiones http
import { HttpClientModule } from '@angular/common/http' ;

import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

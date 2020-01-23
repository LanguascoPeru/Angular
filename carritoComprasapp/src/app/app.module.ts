import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

///---- RUTAS
import { APP_ROUTING } from './app.routes';

////------ peticiones http
import { HttpClientModule } from '@angular/common/http' ;

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProductoComponent } from './pages/mantenimiento/producto/producto.component';
import { CarritoComprasComponent } from './pages/carrito-compras/carrito-compras.component';
import { FiltroComponent } from './pages/carrito-compras/filtro/filtro.component';
import { CarritoComponent } from './pages/carrito-compras/carrito/carrito.component';
import { ProductoListComponent } from './pages/carrito-compras/producto-list/producto-list.component';
import { ProductoDetalleComponent } from './pages/carrito-compras/producto-detalle/producto-detalle.component';
 
 

// importar rutas


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductoComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    CarritoComprasComponent,
    FiltroComponent,
    CarritoComponent,
    ProductoListComponent,
    ProductoDetalleComponent,
 
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

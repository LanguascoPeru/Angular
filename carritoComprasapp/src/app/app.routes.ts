import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductoComponent } from './pages/mantenimiento/producto/producto.component';
import { CarritoComprasComponent } from './pages/carrito-compras/carrito-compras.component';
import { ProductoDetalleComponent } from './pages/carrito-compras/producto-detalle/producto-detalle.component';
  
const APP_ROUTERS: Routes = [
    // { path: 'home', component: HomeComponent  ,  canActivate: [AuthGuard]},  
    { path: 'home', component: CarritoComprasComponent},  
    { path: 'producto', component: ProductoComponent},  
    { path: 'productoDetalle/:id', component: ProductoDetalleComponent},  
    { path: '', pathMatch:'full', redirectTo:'home' },
    { path: '**', pathMatch:'full', redirectTo:'home' },
  ];
  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTERS,{useHash:true});  



 
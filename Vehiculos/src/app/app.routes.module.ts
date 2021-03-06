import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { VehiculoComponent } from './pages/mantenimiento/vehiculo/vehiculo.component';
 

 
const APP_ROUTERS: Routes = [
    { path: 'home', component: HomeComponent  ,  canActivate: [AuthGuard]},    
    { path: 'login', component: LoginComponent},
    { path: 'Vehiculo', component: VehiculoComponent},
    { path: '', pathMatch:'full', redirectTo:'home' },
    { path: '**', pathMatch:'full', redirectTo:'home' },
  ];
  
  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTERS,{useHash:true});  



 
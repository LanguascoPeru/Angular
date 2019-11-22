import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { VisorComponent } from './pages/visor/visor.component';
import { AuthGuard } from './guards/auth.guard';
  
const APP_ROUTERS: Routes = [
    { path: 'home', component: HomeComponent  ,  canActivate: [AuthGuard]},  
    //{ path: 'home', component: HomeComponent},  
    { path: 'login', component: LoginComponent},
    { path: 'visor', component: VisorComponent  ,  canActivate: [AuthGuard]},
    { path: '', pathMatch:'full', redirectTo:'home' },
    { path: '**', pathMatch:'full', redirectTo:'home' },
  ];
  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTERS,{useHash:true});  



 
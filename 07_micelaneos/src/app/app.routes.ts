
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

// rutas hijas llamandolo de otro archivo independiente
import { USUARIOS_ROUTERS } from './components/usuario/usuario.routes';
 

 
const APP_ROUTERS: Routes = [
    { path: 'home', component: HomeComponent },  
    {    // configuracion de rutas hijas  ejemplo:  usuario/10/editar
       path: 'usuario/:id', 
       component: UsuarioComponent,
       children: USUARIOS_ROUTERS
    },    // fin de configuracion de rutas hijas
    { path: '', pathMatch:'full', redirectTo:'home' },
    { path: '**', pathMatch:'full', redirectTo:'home' },
  ];
  
  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTERS,{useHash:true});  

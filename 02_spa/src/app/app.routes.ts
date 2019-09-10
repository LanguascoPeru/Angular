import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeBuscarComponent } from './components/heroe-buscar/heroe-buscar.component';
 
const APP_ROUTERS: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'heroe/search/:nombre', component: HeroeBuscarComponent },
    { path: '**', pathMatch:'full', redirectTo:'home' },
  ];
  
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTERS,{useHash:true});

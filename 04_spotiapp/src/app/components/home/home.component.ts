import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {
  
  nuevasCanciones:any[] =[];

  constructor( private spotifyService : SpotifyService ) {

     this.spotifyService.getNewReleases()
         .subscribe((data:any)=>{            
            console.log(data);
            this.nuevasCanciones =data;
          });

  } 
}

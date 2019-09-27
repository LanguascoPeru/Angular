import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {
  
  nuevasCanciones:any[] =[];
  load:boolean;
  error:boolean=false;
  mensajeError:string="";

  constructor( private spotifyService : SpotifyService ) {  
    this.load=true;
    this.getNewReleases();
  } 

  getNewReleases(){
      this.spotifyService.getNewReleases()
      .subscribe((data:any)=>{    
          this.load=false;
          this.nuevasCanciones =data;
       }, (err)=>{
           this.load=false;
           this.error=true;
           this.mensajeError =err.error.error.message;
       });
  }

}

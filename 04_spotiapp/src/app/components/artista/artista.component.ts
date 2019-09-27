import { Component } from '@angular/core';
//---para trabajar con las rutas
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent   {

  artista:any ={};
  topTracks:any =[];
  load:boolean;
  constructor(private activatedRoute:ActivatedRoute, private spotifyService:SpotifyService) {
     //---obtener el parametro que viene por la url
      this.activatedRoute.params.subscribe(params=>{
         this.getArtista(params['id']);
         this.getTopTracks(params['id']);
      })
   }

   getArtista(id:string){
      this.load=true;
      this.spotifyService.getArtista(id)
      .subscribe((data:any)=>{
         this.load=false;
         this.artista =data ;
      })
   }

   getTopTracks(id:string){
      this.load=true;
      this.spotifyService.getTopTracks(id)
          .subscribe((data)=>{
             console.log('getTopTracks');
             console.log(data);
            this.load=false;             
            this.topTracks=data;
          })

   }


}

import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas:any[] =[];
  load:boolean;

  constructor(private spotifyService: SpotifyService) {
    this.load=false;
   }

  buscar(termino:string) { 
    this.spotifyService.getArtistas(termino)
        .subscribe((data:any)=>{
          this.load=false;
            this.artistas = data;
        });

  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { pipe } from 'rxjs';

// @Injectable( {
//   providedIn : 'root'  ---- forma automatica de inyectar servicios para no declararlo en el app.modulo.ts
// })
@Injectable()
export class SpotifyService {  

  constructor(private http:HttpClient ) {
    console.log('spotify services ready')
  }

  getQuery(query: string){
    const URL= "https://api.spotify.com/v1/" + query;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAE9zc64iNip-nhaxi4IERgw3yLgPFhzUh37VPMOYrkkA2IR8x1Ngl2iYu_fFDVMg4VQsOoiQxAz4Cf5vg'
    });
  
    return this.http.get(URL, {headers});  
  }

  ////---anterior forma
  // getNewReleases(){
  //   //---definiendo parametros en la peticion
  //   const headers = new HttpHeaders({
  //       'Authorization' : 'Bearer BQCmOQ7By4FoWVSr0da6RfQ8xfqylsIgCLcCmOHd3VgzHPz3vPDg8uqljv3bB-ZV_vEspH1rApAmUIG2Dak'
  //   });

  // filtrar la informacion
  //  .pipe(map((data:any)=>{
  //   return data.artists.items;
  //  }));  

  //   return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers}) 
  //                   .pipe( map((data:any)=>{
  //                      return data.albums.items;
  //                   }))
     
  // }
  
    // nueva forma
  getNewReleases(){
    return this.getQuery("browse/new-releases")
          .pipe( map((data:any)=>{
              return data.albums.items;
          }))     
  }  

  getArtistas(termino:string){
   return this.getQuery( `search?q=${termino}$&type=artist&limit=15`)
              .pipe(map((data:any)=>{
                return data.artists.items;
              }))
  }


  getArtista(id:string){
    return this.getQuery( `artists/${id}`)
  }

  getTopTracks(id:string){
    return this.getQuery( `artists/${id}/top-tracks?country=es`)
               .pipe(map( (data:any []) =>{
                     return data['tracks'];
               }));
  }


}

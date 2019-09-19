import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// @Injectable( {
//   providedIn : 'root'  ---- forma automatica de inyectar servicios para no declararlo en el app.modulo.ts
// })


@Injectable()
export class SpotifyService {
  

  constructor(private http:HttpClient ) {
    console.log('spotify services ready')
  }


  getNewReleases(){
    //---definiendo parametros en la peticion
    const headers = new HttpHeaders({
        'Authorization' : 'Bearer BQAJnpp_TixWZJakmdGnWYv4u-1rfsXksFRZV_tVGlweXJkZq72ZYWxcruAlNilOfCiaqYlwW1BrmES-6Zs'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtista(termino:string){
      const headers = new HttpHeaders({
        'Authorization' : 'Bearer BQAJnpp_TixWZJakmdGnWYv4u-1rfsXksFRZV_tVGlweXJkZq72ZYWxcruAlNilOfCiaqYlwW1BrmES-6Zs'
     });

    return this.http.get('https://api.spotify.com/v1/search?q='+ termino +'&type=artist&limit=15', {headers});
  }

}

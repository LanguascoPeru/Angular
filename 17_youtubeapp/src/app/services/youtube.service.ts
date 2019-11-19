import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  yuotubeUrl: string = 'https://www.googleapis.com/youtube/v3';
  apiKey: string = 'AIzaSyBzNjNzA_ZMHXJSJfTTjQrSWFTcXvVX_is';
  nextPageToken: string = '';

  constructor(private http:HttpClient) { }

  getVideos(){
    let url = `${this.yuotubeUrl}/playlistItems`;
    let parametros = new HttpParams();
    parametros = parametros.append('part', 'snippet');
    parametros = parametros.append('maxResults', '10');
    parametros = parametros.append('playlistId', 'UUuaPTYj15JSkETGnEseaFFg');
    parametros = parametros.append('key', this.apiKey);

    return this.http.get(url,{params: parametros})
               .pipe(map((resp:any)=>{   
                       this.nextPageToken = resp.nextPageToken;

                      let videos:any[] = [];
                      for (let video of resp.items){
                        const snippet:any[] = video.snippet;
                        videos.push(snippet);
                      }

                      return videos;
               }));
  }

}

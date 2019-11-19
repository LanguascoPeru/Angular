import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  videos:any[] = [];
  movieSelect:any ;

  constructor(private youtubeService :YoutubeService) { 
    
    this.youtubeService.getVideos()
                       .subscribe((data)=>{       
                         this.videos = data;
                         console.log(  this.videos );
                       })
  }

  ngOnInit() {
  }

  verVideo(video:any){
    this.movieSelect = video;
    $('#myModal').modal()

  }

}

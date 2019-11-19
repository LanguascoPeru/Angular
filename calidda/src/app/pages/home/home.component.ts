import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { LoginService } from '../../services/login.service';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {  
  constructor(private loginService:LoginService ) { 
 
  }
  ngOnInit() { 
    this.loginService.updateLoginStatus(true);
  }
 


}

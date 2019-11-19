 
import {Component, OnInit} from '@angular/core';
import { LoginService } from '../../services/login.service';

///---para select 2
import * as jquery from 'jquery';
 

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
    jquery('.selectFiltros').select2(); //initialize 
    jquery('#inputState').val('3').trigger('change.select2');
  }
 
}

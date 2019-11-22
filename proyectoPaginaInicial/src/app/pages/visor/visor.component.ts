import { Component, OnInit , ChangeDetectorRef} from '@angular/core';
import { LoginService } from '../../services/login.service';
///---para select 2
import * as jquery from 'jquery';
import { HttpClient } from '@angular/common/http';

import 'datatables.net';
import 'datatables.net-bs4';

import Swal from 'sweetalert2'
import { NgForm, FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styles: []
})
export class VisorComponent implements OnInit {

  clients: any[];
  dataTable: any; 
  public formGroup: FormGroup;
  obj_usuario:string;

  constructor( private formBuilder: FormBuilder, private loginService: LoginService, private http: HttpClient, private chRef: ChangeDetectorRef) {

    this.obj_usuario = 'Rafael Franchesco Languasco T.'

    setTimeout(function(){ 
      jquery('#cbo_vendedor').val(3).trigger('change.select2');
    }, 500);

   }

  ngOnInit() {
    this.loginService.updateLoginStatus(true);
    
    ///----creando los objectos
    this.buildForm();
    
    jquery('.selectFiltros').select2(); //initialize 
    this.obteniendoCliente();
  }

  
  private buildForm() {
    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    const name = 'JOHN DOE';
    
    this.formGroup = this.formBuilder.group({
      registeredOn: today,
      name: name.toLowerCase(),
      email: 'john@angular.io',
      password: ''
    });
  }

  obteniendoCliente(){
    Swal.fire({
      title: 'Sistemas',
      text: 'Cargando..',
      icon: 'info',
    })
    Swal.showLoading();
    this.http.get('https://5a5a9e00bc6e340012a03796.mockapi.io/clients')
    .subscribe((data: any[]) => {
      Swal.close();
        this.clients = data;
        // You'll have to wait that changeDetection occurs and projects data into 
        // the HTML template, you can ask Angular to that for you ;-)
        this.chRef.detectChanges();
        // Now you can use jQuery DataTables :
        const table: any = jquery('#tblClientes');
        this.dataTable = table.DataTable({
          "scrollY":        "400px",
          "scrollCollapse": true,
          "paging":         false
      });
    });  
  }

  actualizarClientes(){

    this.http.get('https://5a5a9e00bc6e340012a03796.mockapi.io/clients')
    .subscribe((data: any[]) => {
 
      if(this.dataTable){
        this.dataTable.destroy();
        this.clients= [];
      }
      this.clients = data;

      // You'll have to wait that changeDetection occurs and projects data into 
      // the HTML template, you can ask Angular to that for you ;-)
      this.chRef.detectChanges();
      // Now you can use jQuery DataTables :
      const table: any = jquery('#tblClientes');
      this.dataTable = table.DataTable({
          "scrollY":        "400px",
          "scrollCollapse": true,
          "paging":         false
        });
    });

  }

  guardar(){
    console.log(this.formGroup)
    alert(this.obj_usuario)
  }



}

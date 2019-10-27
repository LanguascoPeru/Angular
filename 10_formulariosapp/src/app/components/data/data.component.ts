import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
 

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent   {

  form:FormGroup;
  form2:FormGroup;

  usuario:any = {
    nombreCompleto :{
      nombre: 'rafael',
      apellido: 'languasco'
    },
    email:"rafa.languasco@gmail.com",
    // pasatiempo : ["correr"]
  }



  constructor() { 
    
    //son validaciones que se puede dar al formulario si son varios van entre corchetes ---->  [ Validators.required,Validators.minLength(3)]

    this.form = new FormGroup({
      'nombre' :new FormControl(this.usuario.nombreCompleto.nombre,[ Validators.required,Validators.minLength(3)] ),
      'apellido' :new FormControl(this.usuario.nombreCompleto.apellido,Validators.required),       
      'email' :new FormControl(this.usuario.email, [ Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])
    });

    this.form2 = new FormGroup({
      'nombreCompleto': new FormGroup({
                'nombre' :new FormControl('',[ Validators.required,Validators.minLength(3)] ),
                'apellido' :new FormControl('',[Validators.required, this.validar_noLanguasco]),         
     }),
    'email' :new FormControl('', [ Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
    'pasatiempo' : new FormArray([
        new FormControl('correr', Validators.required)
      ]),
    'username' :new FormControl('',[Validators.required],this.existeUsuario),
    'password' :new FormControl('', [ Validators.required]),
    'password2' :new FormControl(''),
    });
    
    // cargar automaticamente los objectos, para eso tiene que tener los campos con los mismos nombres ( form2 = usuario )
    // this.form2.setValue(this.usuario);

      /// otra forma
      this.form2.controls['password2'].setValidators([Validators.required, this.noIgual.bind(this.form2)  ]);


    //combo dependientes

    this.form2.controls['username'].valueChanges
        .subscribe((data)=>{
            console.log('valueChangesxx');
            console.log(data);
        })

        this.form2.controls['username'].statusChanges
        .subscribe((data)=>{
          console.log('statusChangesxx');
            console.log(data);
        })        

  }


  existeUsuario(control:FormControl):Promise<any>|Observable<any> {
    let promesa = new Promise((resolve, reject)=>{
         setTimeout(()=>{
          console.log('control.value')
          console.log(control.value)
            if (control.value === 'strider') {
 
              resolve({
                existe:true
              })
            }else{                 
              resolve(null);
            }
         }, 3000);
    })

    return promesa;
  }

  noIgual(control:FormControl) :{[s:string]:boolean}  {
    let forma2:any =this;
    if (control.value !== forma2.controls['password'].value){
      return {
        noiguales:true
      }
    }
  }
  
  validar_noLanguasco(control:FormControl) :{[s:string]:boolean}  {
    if (control.value==='languasco'){
      return {
        nolanguasco:true
      }
    }
  }
 
  guardar(){
    console.log(this.form2);
    console.log(this.form2.value);
    // this.form2.reset(this.usuario);
    // this.form2.reset({
    //   nombreCompleto :{
    //     nombre: '',
    //     apellido: ''
    //   },
    //   email:""      
    // });
  }

  agregarPasatiempo(){
    console.log('entroo');
    (<FormArray>this.form2.controls['pasatiempo']).push(
      new FormControl('Dormir', Validators.required)
    )
  }


}

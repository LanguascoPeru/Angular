import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../components/models/file-item';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES= 'img';
  constructor(private db: AngularFirestore) { }

  // declaracion de un arreglo como argumento
  cargarImagenesFirebase(imagenes:FileItem[]){
    // console.log(imagenes);  
    // funciones necesarias para el uso de firebase  ahi essta la conexion
    const storageRef= firebase.storage().ref();

    for(const item of imagenes){
      item.estaSubiendo = true;
      if (item.progreso >=100) {
          continue;
      }        
      const uploadTask: firebase.storage.UploadTask = storageRef.child(`${ this.CARPETA_IMAGENES }/ ${item.nombreArchivo} `).put(item.archivo);

      uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED, 
            (snapshot:firebase.storage.UploadTaskSnapshot )=> item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100, 
            (error)=>console.error('Error al subir ',  error),
            ()=>{
              console.log('imagen cargada correctamente');
              uploadTask.snapshot.ref.getDownloadURL()
              .then( downloadUrl => {   
                item.url=downloadUrl;
                item.estaSubiendo = false;
                // guardando archivo a firebase
                 this.guardarImagen({
                   nombre: item.nombreArchivo,
                   url: item.url
                 });
              })
              .catch( error => {
                console.log(error);
              });         
            })
    }
  }



  private guardarImagen(imagen:{nombre:string,url:string}){
    //----metodo para almacenar una imagen en FireBase
    this.db.collection(`/${this.CARPETA_IMAGENES}`)
            .add(imagen);
  }
}

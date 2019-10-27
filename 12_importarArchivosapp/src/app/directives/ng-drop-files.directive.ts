import { Directive, EventEmitter , ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../components/models/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() archivosD: FileItem[] =[];
  // EventEmitter despues va lo que quiero enviar un tipo de datos<boolean>
  @Output() mouseSobre:EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  // dragover sobre el elemento
  @HostListener('dragover', ['$event'])
  public onDragEnter(event:any){
    this.mouseSobre.emit(true);
    this.prevenirDetener(event);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event:any){
    this.mouseSobre.emit(false);
  }


  // cuando el usuario suelta los archivos a cargar
  @HostListener('drop', ['$event'])
  public onDrop(event:any){
    this.mouseSobre.emit(false);
    const transferencia = this.getTransferencia(event);

    if (!transferencia) {
      return;
    }

    this.extraerArchivos(transferencia.files);
    this.prevenirDetener(event);
  }

  //compatibilidad en los navegadores
  private getTransferencia(event:any){
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private extraerArchivos(archivosLista:FileList){ 
   

    for (const propiedad  in Object.getOwnPropertyNames(archivosLista)) {
       const archivoTemporal= archivosLista[propiedad];
        
       //verificando el archivo
       if (this.archivoPuedeCargado(archivoTemporal)) {
         const nuevoArchivo = new FileItem(archivoTemporal);

         /// agregando a mi lista de archivos
         this.archivosD.push(nuevoArchivo);
       }      
    }
  }


  //validaciones

  private archivoPuedeCargado(archivo:File):boolean{
    if (!this.archivosFueCargado(archivo.name)  && this.esImagen(archivo.type) ) {
      return true;
    }else{
      return false;
    }
  }


  /// impide que el navegador abra la imagen
  private prevenirDetener(event){
    event.preventDefault();
    event.stopPropagation();
  }

  private archivosFueCargado(nombreArchivo:string):boolean{        
       for ( const arch of this.archivosD){
          if (arch.nombreArchivo === nombreArchivo ) {
            console.log('el archivo ya fue agregado')
            return true;
          }
       }
       return false;
  }

  // restringiendo a solo imagenes
  private esImagen( tipoArchivo :string ):boolean{
    return (tipoArchivo==='' || tipoArchivo===undefined ) ? false : tipoArchivo.startsWith('image') ;
  }

}

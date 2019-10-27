export class FileItem{

    public archivo: File;
    public nombreArchivo:string;
    public url:string;
    public estaSubiendo:boolean;
    public progreso:number;

    constructor(_file:File){
      this.archivo = _file;
      this.nombreArchivo = _file.name;
      this.estaSubiendo = false;
      this.progreso =0;
    }
}
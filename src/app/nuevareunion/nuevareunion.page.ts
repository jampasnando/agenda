import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ConsultasService } from '../service/consultas.service';
import { FileUploader, FileLikeObject } from "ng2-file-upload";


@Component({
  selector: 'app-nuevareunion',
  templateUrl: './nuevareunion.page.html',
  styleUrls: ['./nuevareunion.page.scss'],
})
export class NuevareunionPage implements OnInit {
  id:string;
  formulario:FormGroup;
  public uploader:FileUploader = new FileUploader({});
  constructor(private activatedRoute:ActivatedRoute, private formBuilder:FormBuilder, private consultas:ConsultasService, private router:Router) { 
    this.formulario=this.formBuilder.group({
      nombre:new FormControl(null,Validators.compose([
        Validators.required
      ])),
      lugar:new FormControl(null,Validators.compose([
        Validators.required
      ])),
      fecha:new FormControl(null,Validators.compose([
        Validators.required
      ])),
      horainicio:new FormControl(null,Validators.compose([
        Validators.required
      ])),
      
      asistentes:new FormControl(''),
      observaciones:new FormControl(''),
      docs: new FormControl(''),
      estado: new FormControl('Pendiente', Validators.compose([
        Validators.required
      ]))
    });
  }
  
  getFiles(): FileLikeObject[] {
    return this.uploader.queue.map((fileItem) => {
      return fileItem.file;
    });
  }
  borra(item){
    console.log(item);
    this.uploader.removeFromQueue(item);
  }
  reorderFiles(reorderEvent: CustomEvent): void {
    let element = this.uploader.queue.splice(reorderEvent.detail.from, 1)[0];
    this.uploader.queue.splice(reorderEvent.detail.to, 0, element);
  }
  upload(){

    let files = this.getFiles();
    console.log(files);

    let formData = new FormData();
    formData.append('somekey', 'some value') // Add any other data you want to send

    files.forEach((file) => {
      formData.append('files[]', file.rawFile, file.name);
    });
    // POST formData to Server
  }

  ngOnInit() {
    
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    console.log("nuevareunion: ",this.id);
  }
  enviaFormNuevaReunion(){
    console.log(this.formulario);
    console.log("fecha: ",this.formulario.value.fecha);
    let files = this.getFiles();
    console.log(files);
    let vectorfecha=this.formulario.value.fecha.split("T");
    let fechax=vectorfecha[0];
    let aux=this.formulario.value.horainicio.split("T");
    let horax=aux[1].substring(0,5);
    console.log(horax);
    this.consultas.enviaFormNuevaReunion(this.formulario,fechax,horax,this.id,files).subscribe((data:any)=>{
      console.log("desde servidor bd reg nueva reunon: ",data);
      let url="/unevento/".concat(this.id);
      this.router.urlUpdateStrategy="eager";
      this.router.navigateByUrl(url);
    });

  }
}

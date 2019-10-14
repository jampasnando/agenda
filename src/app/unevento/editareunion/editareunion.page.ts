import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultasService } from 'src/app/service/consultas.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FileUploader, FileLikeObject } from "ng2-file-upload";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editareunion',
  templateUrl: './editareunion.page.html',
  styleUrls: ['./editareunion.page.scss'],
})
export class EditareunionPage implements OnInit {
  idreunion:string;
  idevento:string;
  formulario:FormGroup;
  docus:[];
  public uploader:FileUploader = new FileUploader({});
  constructor(private activatedRoute:ActivatedRoute, private consultas:ConsultasService, private formBuilder:FormBuilder, private router:Router,private alertCtrl:AlertController) { }

  ngOnInit() {
    this.idreunion=this.activatedRoute.snapshot.paramMap.get("idreunion");
    this.obtienedatosreunion(this.idreunion);
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
      asistentes:new FormControl(null),  
      observaciones:new FormControl(null),  
      docs: new FormControl(null),
      estado: new FormControl(null, Validators.compose([
        Validators.required
      ]))
    });
  }
  borra(item){
    console.log(item);
    this.uploader.removeFromQueue(item);
  }
  getFiles(): FileLikeObject[] {
    return this.uploader.queue.map((fileItem) => {
      return fileItem.file;
    });
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
  abrearch(arch){
    console.log(arch);
  }

  obtienedatosreunion(idreunion){
    this.consultas.obtienedatosreunion(idreunion).subscribe((data:any)=>{
      this.idevento=data.idevento;
      this.formulario.controls.nombre.setValue(data.nombre);
      this.formulario.controls.lugar.setValue(data.lugar);
      this.formulario.controls.fecha.setValue(data.fecha);
      this.formulario.controls.horainicio.setValue(data.horainicio);
      this.formulario.controls.asistentes.setValue(data.asistentes);
      this.formulario.controls.observaciones.setValue(data.observaciones);
      this.formulario.controls.docs.setValue('');
      this.formulario.controls.estado.setValue(data.estado);
      if(data.docs!=""){this.docus=data.docs.split(":");}
      else this.docus=[];
      console.log("docus: ",this.docus);
    });
  }
  async elimina(undoc,i){
      const alerta=await this.alertCtrl.create({
        header:"Está seguro de ELIMINAR el archivo:",
        subHeader:undoc.concat(" ???"),
        message:"Si no está seguro aprete Cancelar",
        buttons:[
          {
            text:"Cancelar",
            role:"cancel",
            handler:(blah)=>{
              // console.log("apretó cancelar");
              
            }
          },
          {
            text:"Borrar",
            handler:(blah)=>{
              this.docus.splice(i,1);
            }
          }
        ]
      });
      alerta.present();

    

  }
  enviaCambiosReunion(){
    let files = this.getFiles();
    let fechax=this.formulario.value.fecha.split("T");
    let horax=this.formulario.value.horainicio;
    this.formulario.controls.docs.setValue(this.docus.join(":"));
    console.log("formuxa actalizar reunion: ",this.formulario.value);
    this.consultas.actualizaDatosReunion(this.formulario,fechax,horax,this.idreunion,files).subscribe((data:any)=>{
      console.log("desde servidor bd reg nueva reunon: ",data);
      let url="/unevento/".concat(this.idevento);
      this.router.urlUpdateStrategy="eager";
      this.router.navigateByUrl(url);
    });
  }
}

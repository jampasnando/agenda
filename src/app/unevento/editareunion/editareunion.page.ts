import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultasService } from 'src/app/service/consultas.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editareunion',
  templateUrl: './editareunion.page.html',
  styleUrls: ['./editareunion.page.scss'],
})
export class EditareunionPage implements OnInit {
  idreunion:string;
  idevento:string;
  formulario:FormGroup;
  constructor(private activatedRoute:ActivatedRoute, private consultas:ConsultasService, private formBuilder:FormBuilder, private router:Router) { }

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
  obtienedatosreunion(idreunion){
    this.consultas.obtienedatosreunion(idreunion).subscribe((data:any)=>{
      this.idevento=data.idevento;
      this.formulario.controls.nombre.setValue(data.nombre);
      this.formulario.controls.lugar.setValue(data.lugar);
      this.formulario.controls.fecha.setValue(data.fecha);
      this.formulario.controls.horainicio.setValue(data.horainicio);
      this.formulario.controls.asistentes.setValue(data.asistentes);
      this.formulario.controls.observaciones.setValue(data.observaciones);
      this.formulario.controls.docs.setValue(data.docs);
      this.formulario.controls.estado.setValue(data.estado);
    });
  }
  enviaCambiosReunion(){
    console.log("formuxa actalizar reunion: ",this.formulario.value);
    let fechax=this.formulario.value.fecha.split("T");
    // let aux=this.formulario.value.horainicio.split("T");
    let horax=this.formulario.value.horainicio;
    // console.log(horax);
    this.consultas.actualizaDatosReunion(this.formulario,fechax,horax,this.idreunion).subscribe((data:any)=>{
      console.log("desde servidor bd reg nueva reunon: ",data);
      let url="/unevento/".concat(this.idevento);
      this.router.urlUpdateStrategy="eager";
      this.router.navigateByUrl(url);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../service/consultas.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detalle-reunion',
  templateUrl: './detalle-reunion.page.html',
  styleUrls: ['./detalle-reunion.page.scss'],
})
export class DetalleReunionPage implements OnInit {
  idreunion:string;
  reunion:any;
  adjuntos:string;
  constructor(private consultas:ConsultasService,  private navParams:NavParams,private modalCtrl:ModalController) { }

  ngOnInit() {
    this.idreunion=this.navParams.get("idreunion");
    this.consultas.consultaUnaReunion2(this.idreunion).subscribe((datos:any)=>{
      console.log("lareunion: ",datos);
      this.adjuntos=datos.docs.split(":");
      this.reunion=datos;
    });
  }
  cerrar(){
    this.modalCtrl.dismiss();
  }
}

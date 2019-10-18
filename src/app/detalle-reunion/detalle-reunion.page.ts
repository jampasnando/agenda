import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../service/consultas.service';
import { ModalController, NavParams } from '@ionic/angular';
import { GLOBAL } from '../service/global';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-detalle-reunion',
  templateUrl: './detalle-reunion.page.html',
  styleUrls: ['./detalle-reunion.page.scss'],
})
export class DetalleReunionPage implements OnInit {
  idreunion:string;
  reunion:any=[{fecha:''}];
  adjuntos:string;
  urldocs=GLOBAL.urldocs;
  constructor(private consultas:ConsultasService,  private navParams:NavParams,private modalCtrl:ModalController,private iab: InAppBrowser) { }

  ngOnInit() {
    this.idreunion=this.navParams.get("idreunion");
    this.consultas.consultaUnaReunion2(this.idreunion).subscribe((datos:any)=>{
      this.reunion=datos;
      console.log("lareunion: ",datos);
      this.adjuntos=datos.docs.split(":");
    });
  }
  cerrar(){
    this.modalCtrl.dismiss();
  }
  abredocu(url){
    console.log("abrira: ",url);
    const abre=this.urldocs.concat(url);
    this.iab.create(abre,'_system',{location:'no'});
  }
}

import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../service/consultas.service';
import { ModalController } from '@ionic/angular';
import { DetalleReunionPage } from '../detalle-reunion/detalle-reunion.page';

@Component({
  selector: 'app-hoy',
  templateUrl: './hoy.page.html',
  styleUrls: ['./hoy.page.scss'],
})
export class HoyPage implements OnInit {
  hoy:any;
  fechax:string;
  fechaz:string;
  dias:any=["DOM","LUN","MAR","MIE","JUE","VIE","SAB"];
  constructor(private consultas:ConsultasService,private modalCtrl:ModalController) { }

  ngOnInit() {
    
    
  }
  ionViewWillEnter(){
    this.consultas.consultahoy().subscribe((fecha:any)=>{
      console.log("fechanormal: ",fecha.fechanormal);
      console.log("dia: ",fecha.dia);
      console.log("current_date",fecha.current_date);
      this.fechaz=fecha.fechanormal;
      this.fechax=this.dias[fecha.dia].concat(", ").concat(fecha.fechanormal);
      this.consultas.reunioneshoy(fecha.current_date).subscribe((datos:any)=>{
        console.log("hoys: ",datos);
        this.hoy=datos;
      });
    });
  }
  atras(fechay){
    console.log("fechay: ",fechay);
    this.consultas.fechaatras(fechay).subscribe((dato:any)=>{
      // console.log(dato);
      console.log("fechanormal: ",dato.fechanormal);
      console.log("dia: ",dato.dia);
      console.log("nuevafecha",dato.nuevafecha);
      this.fechaz=dato.fechanormal;
      this.fechax=this.dias[dato.dia].concat(", ").concat(dato.fechanormal);
      this.consultas.reunioneshoy(dato.nuevafecha).subscribe((datos:any)=>{
        console.log("hoys: ",datos);
        this.hoy=datos;
      });
    });
  }
  adelante(fechay){
    this.consultas.fechaadelante(fechay).subscribe((dato:any)=>{
      console.log("fechanormal: ",dato.fechanormal);
      console.log("dia: ",dato.dia);
      console.log("nuevafecha",dato.nuevafecha);
      this.fechaz=dato.fechanormal;
      this.fechax=this.dias[dato.dia].concat(", ").concat(dato.fechanormal);
      this.consultas.reunioneshoy(dato.nuevafecha).subscribe((datos:any)=>{
        console.log("hoys: ",datos);
        this.hoy=datos;
      });
    });
  }
  async detallereunion(idreunion){
    console.log("idreu: ",idreunion);
    const modal= await this.modalCtrl.create({
      component:DetalleReunionPage,
      componentProps:{
        idreunion:idreunion
      }
    });
    await modal.present();
  }
}

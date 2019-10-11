import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  nuevoestado:string;
  antiguo:string="checked='checked'";
  Pendiente="false";
  Realizada="false";
  Cancelada="false";
  constructor(private modalController: ModalController,private navParams:NavParams) { }

  ngOnInit() {
    this.antiguo=this.navParams.get("antiguo");
    switch (this.antiguo){
      case ('Pendiente'):
        this.Pendiente="true";
        break;
      case ('Realizada'):
          this.Realizada="true";
        break;
        break;
      case ('Cancelada'):
          this.Cancelada="true";
        break;
    }
    console.log("antiguo: ",this.antiguo);
    console.log("estados: ",this.Pendiente," | ",this.Realizada," | ",this.Cancelada);
  }
  elegido(event){
    this.nuevoestado=event.detail.value;
  }
  cancelaModal(){
    this.modalController.dismiss("Cancelada");

  }
  guardaCambios(){
    this.modalController.dismiss(this.nuevoestado);
  }
}

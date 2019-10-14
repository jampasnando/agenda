import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../service/consultas.service';

@Component({
  selector: 'app-hoy',
  templateUrl: './hoy.page.html',
  styleUrls: ['./hoy.page.scss'],
})
export class HoyPage implements OnInit {
  hoy:any;
  constructor(private consultas:ConsultasService) { }

  ngOnInit() {
    this.consultas.reunioneshoy().subscribe((datos:any)=>{
      console.log(datos);
      this.hoy=datos;
    });
  }

}

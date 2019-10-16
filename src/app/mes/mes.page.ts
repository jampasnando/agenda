import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../service/consultas.service';

@Component({
  selector: 'app-mes',
  templateUrl: './mes.page.html',
  styleUrls: ['./mes.page.scss'],
})
export class MesPage implements OnInit {
  matriz:any[][]=new Array();
  matrizx:any[][]=new Array();
  nroprimerdia=0;
  indicedia=0;
  nroultdia=0;
  fechaultdia=0;
  fila=1;
  vector=[];
  vectorx=[];
  constructor(private consultas:ConsultasService) { }

  ngOnInit() {
    this.consultas.consultamesactual().subscribe((resp:any)=>{
      console.log(resp);
      this.nroprimerdia=resp.aux.nroprimerdia;
      this.indicedia=this.nroprimerdia;
      this.nroultdia=resp.aux.nroultdia;
      this.fechaultdia=resp.aux.fechaultdia;
      
      for(let k=0;k<this.nroprimerdia;k++){
        this.vector.push("");
      }

      for(let i=1;i<=this.fechaultdia;i++){
        this.vector.push(i);
        this.indicedia++;
        if(this.indicedia>6){
          this.indicedia=0;
          this.fila++;
          this.matriz.push(this.vector);
          this.vector=[];
        }
      }
      if(this.indicedia<7){
        for(let p=(this.indicedia);p<=6;p++)  {
          this.vector.push("");
        }
        this.matriz.push(this.vector);
        this.fila++;
      }
      for(let j=0;j<(this.fila-1);j++){
        for(let m=0;m<=6;m++){
          console.log(j,":",m," ->",this.matriz[j][m]);
          this.vectorx.push("");
        }
        this.matrizx.push(this.vectorx);
        this.vectorx=[];
      }
      
      console.log("matrizx: ",this.matrizx);

      for(let reunionesundia of resp.nroreuniones){
        console.log("reunionesundia: ",reunionesundia);
        this.matrizx[reunionesundia.semana-1].splice(reunionesundia.nrodia,1,reunionesundia.cantidad);
      }
    });

  }

}

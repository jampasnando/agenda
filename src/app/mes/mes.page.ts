import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../service/consultas.service';
import { Router } from '@angular/router';
import { GLOBAL } from '../service/global';
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
  ano=0;
  mes=0;
  pintar="";
  elrol=GLOBAL.usuariorol;
  meses=["","ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"]
  constructor(private consultas:ConsultasService,private router:Router) { }

  ngOnInit() {
    
    
  }
  ionViewWillEnter(){
    this.consultames(this.mes,this.ano);
  }
  consultames(mes,ano){
    this.matriz=new Array();
    this.matrizx=new Array();
    this.vector=[];
    this.vectorx=[];
    this.nroprimerdia=0;
    this.indicedia=0;
    this.nroultdia=0;
    this.fechaultdia=0;
    this.fila=1;
    this.consultas.consultamesactual(mes,ano).subscribe((resp:any)=>{
      console.log("datos de:",mes,"/",ano,": ",resp);
      this.nroprimerdia=resp.aux.nroprimerdia;
      this.indicedia=this.nroprimerdia;
      this.nroultdia=resp.aux.nroultdia;
      this.fechaultdia=resp.aux.fechaultdia;
      this.ano=resp.ano;
      this.mes=resp.mes;
      this.pintar=resp.pintar;
      console.log("resp: ",resp);
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
      console.log("INDICEDIA: ",this.indicedia);
      if(this.indicedia<7 && this.indicedia>0){
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
  detallemes(dia){
    const fechaaux=this.ano.toString().concat("-").concat(this.mes.toString()).concat("-").concat(dia);
    console.log("fechaparadetalle: ",fechaaux);
    let url="/hoy/".concat(fechaaux);
    this.router.urlUpdateStrategy="eager";
    this.router.navigateByUrl(url);
  }
  atras(){
    this.mes--;
    if(this.mes<1){
      this.mes=12;
      this.ano--;
    }
    this.consultames(this.mes,this.ano);
  }
  adelante(){
    this.mes++;
    if(this.mes>12){
      this.mes=1;
      this.ano++;
    }
    this.consultames(this.mes,this.ano);
  }
  
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from './global';
@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  servidor:string=GLOBAL.urlserver;
  // urlfunc:string=GLOBAL.urlfunc;
  constructor(private httpClient:HttpClient) { }
  enviaFormNuevoEv(datos:any):Observable<any>{
    // console.log("recibido en consultas: ",datos);
    const params:FormData=new FormData();
    params.append('nombre',datos.nombre);
    params.append('descripcion',datos.descripcion);
    params.append('estado',datos.estado);
    params.append("consulta","recibeformnuevoev");
    // console.log("parametros: ",params);
    return this.httpClient.post<any>(this.servidor,params);
  }
  enviaFormNuevaReunion(formu:any,fechax,horax,id,files):Observable<any>{
    console.log("servicio nueva reunion recibe: ",formu.value.nombre);
    const params:FormData=new FormData();
    params.append("nombre",formu.value.nombre);
    params.append("lugar",formu.value.lugar);
    params.append("fecha",fechax);
    params.append("horainicio",horax);
    params.append("asistentes",formu.value.asistentes);
    params.append("observaciones",formu.value.observaciones);
    params.append("docs",formu.value.docs);
    params.append("estado",formu.value.estado);
    params.append("id",id);
    params.append("consulta","recibeformnuevareunion");
    if(files.length>0){
      files.forEach((file) => {
        params.append('bandera','si');
        params.append('files[]', file.rawFile, file.name);
      });
    }
    else {params.append('bandera','no');}

    return this.httpClient.post<any>(this.servidor,params);
  }
  consultaEventos(){
    const params:FormData=new FormData();
    params.append("consulta","listaeventos");
    return this.httpClient.post<any>(this.servidor,params);
  }
  consultaUnEvento(id){
    const params:FormData= new FormData();
    params.append("id",id);
    params.append("consulta","consultaunev");
    return this.httpClient.post<any>(this.servidor,params);
  }
  consultaReuniones(idevento){
    const params:FormData=new FormData();
    params.append("idevento",idevento);
    params.append("consulta","consultareuniones");
    return this.httpClient.post<any>(this.servidor,params);
  }
  consultaUnaReunion(idreunion){
    const params:FormData=new FormData();
    params.append("idreunion",idreunion);
    params.append("consulta","consultaunareunion");
    return this.httpClient.post<any>(this.servidor,params);
  }
  
  borrarReunion(idreunion){
    console.log("enviará para borrar reunion: ",idreunion);
    const params:FormData=new FormData();
    params.append("idreunion",idreunion);
    params.append("consulta","borrareunion");
    return this.httpClient.post<any>(this.servidor,params);
  }
  borraEvento(idevento){
    const params:FormData= new FormData();
    params.append("idevento",idevento);
    params.append("consulta","borraevento");
    return this.httpClient.post<any>(this.servidor,params);
  }
  actualizaEstadoEv(idevento,estado){
    const params:FormData=new FormData();
    params.append("idevento",idevento);
    params.append("estado",estado);
    params.append("consulta","actualizaestadoev");
    return this.httpClient.post<any>(this.servidor,params);
  }
  actualizaEstadoReunion(idreunion,estado){
    const params:FormData=new FormData();
    params.append("idreunion",idreunion);
    params.append("estado",estado);
    params.append("consulta","actualizaestadoreunion");
    return this.httpClient.post<any>(this.servidor,params);
  }
  obtienedatosreunion(idreunion){
    console.log("consultas service recibe idreunion: ",idreunion);
    const params:FormData=new FormData();
    params.append("idreunion",idreunion);
    params.append("consulta","obtienedatosreunion");
    return this.httpClient.post<any>(this.servidor,params);
  }
  actualizaDatosReunion(formu,fechax,horax,idreunion,files){
    const params:FormData=new FormData();
    params.append("nombre",formu.value.nombre);
    params.append("lugar",formu.value.lugar);
    params.append("fecha",fechax);
    params.append("horainicio",horax);
    params.append("duracion",formu.value.duracion);
    params.append("tiqueos",formu.value.tiqueos);
    params.append("asistentes",formu.value.asistentes);
    params.append("observaciones",formu.value.observaciones);
    params.append("docs",formu.value.docs);
    params.append("estado",formu.value.estado);
    params.append("idreunion",idreunion);
    params.append("consulta","actualizadatosreunion");
    if(files.length>0){
      params.append('bandera','si');
      files.forEach((file) => {
        params.append('files[]', file.rawFile, file.name);
      });
    }
    else{
      params.append("bandera",'no');
    }
    return this.httpClient.post<any>(this.servidor,params);
  }
  obtieneDatosEvento(idevento){
    console.log("obtendra evento con id: ",idevento);
    const params:FormData=new FormData();
    params.append("idevento",idevento);
    params.append("consulta","obtienedatosevento");
    return this.httpClient.post<any>(this.servidor,params);
  }
  actualizaDatosEvento(formu,idevento){
    const params:FormData=new FormData();
    params.append("nombre",formu.value.nombre);
    params.append("descripcion",formu.value.descripcion);
    params.append("estado",formu.value.estado);
    params.append("idevento",idevento);
    params.append("consulta","actualizadatosevento");
    return this.httpClient.post<any>(this.servidor,params);
  }
  
  // obtieneFuncionarios(){
  //   const params:FormData=new FormData();
  //   params.append("tipo","N");
  //   params.append("dato",'');
  //   params.append("consulta","obtienefuncionarios");
  //   return this.httpClient.post<any>(this.urlfunc,params);
  // }
  consultaCredenciales(password){
    const params:FormData=new FormData();
    params.append("pass",password);
    params.append("consulta","consultacredenciales");
    return this.httpClient.post<any>(this.servidor,params);
  }
  consultaAdmins(){
    const params:FormData=new FormData();
    params.append("consulta","consultadmins")
    return this.httpClient.post<any>(this.servidor,params);
  }
  enviaNuevoUsr(formulario){
    const params:FormData=new FormData();
    params.append("nombre",formulario.value.nombre);
    params.append("rol",formulario.value.rol);
    params.append("ci",formulario.value.ci);
    params.append("password",formulario.value.password);
    params.append("consulta","guardanuevousr");
    return this.httpClient.post<any>(this.servidor,params);
  }
  borraUsr(idusr){
    const params:FormData=new FormData();
    params.append("idusr",idusr);
    params.append("consulta","borrausr");
    return this.httpClient.post<any>(this.servidor,params);
  }
  actualizaComentario(comentario,idconvocado){
    const params:FormData=new FormData();
    params.append("comentario",comentario);
    params.append("idconvocado",idconvocado);
    params.append("consulta","actualizacomentario");
    return this.httpClient.post<any>(this.servidor,params);
  }
  reunioneshoy(){
    const params:FormData=new FormData();
    params.append("consulta","reunioneshoy");
    return this.httpClient.post<any>(this.servidor,params);
  }
}
  

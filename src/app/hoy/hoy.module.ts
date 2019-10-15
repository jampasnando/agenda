import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HoyPage } from './hoy.page';
import { HttpClientModule } from '@angular/common/http';
import { ConsultasService } from '../service/consultas.service';
import { DetalleReunionPage } from '../detalle-reunion/detalle-reunion.page';

const routes: Routes = [
  {
    path: '',
    component: HoyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HoyPage,DetalleReunionPage],
  providers:[ConsultasService,DetalleReunionPage],
  entryComponents:[DetalleReunionPage]
})
export class HoyPageModule {}

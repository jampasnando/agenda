import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'ingreso', pathMatch: 'full' },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'nuevoevento', loadChildren: './nuevoevento/nuevoevento.module#NuevoeventoPageModule' },
  { path: 'unevento/:id', loadChildren: './unevento/unevento.module#UneventoPageModule' },
  { path: 'nuevareunion/:id', loadChildren: './nuevareunion/nuevareunion.module#NuevareunionPageModule' },
  { path: 'editareunion/:idreunion', loadChildren: './unevento/editareunion/editareunion.module#EditareunionPageModule' },
  { path: 'editaevento/:idevento', loadChildren: './home/editaevento/editaevento.module#EditaeventoPageModule' },
  // { path: 'comentar', loadChildren: './unareunion/comentar/comentar.module#ComentarPageModule' },
  { path: 'ingreso', loadChildren: './ingreso/ingreso.module#IngresoPageModule' },
  { path: 'admin', loadChildren: './home/admin/admin.module#AdminPageModule' },
  { path: 'nuevousr', loadChildren: './home/nuevousr/nuevousr.module#NuevousrPageModule' },
  { path: 'hoy', loadChildren: './hoy/hoy.module#HoyPageModule' },
  { path: 'mes', loadChildren: './mes/mes.module#MesPageModule' },
  // { path: 'detalle-reunion', loadChildren: './detalle-reunion/detalle-reunion.module#DetalleReunionPageModule' },
  // { path: 'modalevento', loadChildren: './home/modalevento/modalevento.module#ModaleventoPageModule' },
  // { path: 'modal', loadChildren: './unevento/modal/modal.module#ModalPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaSolicitudComponent } from './nueva-solicitud/nueva-solicitud.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { DetalleSolicitudesComponent } from './detalle-solicitudes/detalle-solicitudes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListaSolicitudesComponent,
        pathMatch: 'full',
      },
      {
        path: 'Detalle/:id',
        component: DetalleSolicitudesComponent,
      }, {
        path: 'RegistrarSolicitud',
        component: NuevaSolicitudComponent,
      }
    ])

  ],
  // exports:[ListaSolicitudesComponent],


})
export class SolicitudesModule { }

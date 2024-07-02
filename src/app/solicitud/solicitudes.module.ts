import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaSolicitudComponent } from './nueva-solicitud/nueva-solicitud.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { DetalleSolicitudesComponent } from './detalle-solicitudes/detalle-solicitudes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NupreInformacionBasicaComponent } from './detalle-solicitudes/nupre-informacion-basica/nupre-informacion-basica.component';
import { NupreRegistrarDocumentacionComponent } from './detalle-solicitudes/nupre-registrar-documentacion/nupre-registrar-documentacion.component';
import { NupreSometerSolicitudComponent } from './detalle-solicitudes/nupre-someter-solicitud/nupre-someter-solicitud.component';



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
        component: NupreInformacionBasicaComponent,
      }, {
        path: 'RegistrarSolicitud',
        component: NuevaSolicitudComponent,
      }
    ])

  ],

  declarations: [
    NupreInformacionBasicaComponent,
    NupreRegistrarDocumentacionComponent,
    NupreSometerSolicitudComponent

  ],
  // exports:[ListaSolicitudesComponent],


})
export class SolicitudesModule { }

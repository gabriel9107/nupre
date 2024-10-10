import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ListaSolicitudesComponent } from './solicitud/lista-solicitudes/lista-solicitudes.component';
import { NupreInformacionBasicaComponent } from './solicitud/nupre-informacion-basica/nupre-informacion-basica.component';
import { SolicitudesFormComponent } from './solicitud/detalle-basico/solicitudes-form/solicitudes-form.component';
import { AsociacionesComponent } from './solicitud/asociaciones/asociaciones.component';
import { NupreSometerSolicitudComponent } from './solicitud/nupre-someter-solicitud/nupre-someter-solicitud.component';
import { FormularioSolicitudComponent } from './solicitud/formulario-solicitud/formulario-solicitud.component';
import { FormularioComponent } from './solicitud/asociaciones/formulario/formulario.component';
import { FormRegisterComponent } from './solicitud/localidades/form-register/form-register.component';



const routes: Routes = [

  {
    path: '',
    component: ListaSolicitudesComponent,
    pathMatch: 'full',
  },
  {
    path: 'Detalle/:id',
    component: NupreInformacionBasicaComponent,
  },
  {
    path: 'RegistrarSolicitud',
    component: FormularioSolicitudComponent,
  },
  {
    path: 'RegistrarTitulo/:id/:id2',
    component: SolicitudesFormComponent

  },
  {
    path: 'Asociaciones/:id',
    component: AsociacionesComponent
  },
  {
    path: 'RegistrarAsociacion/:id',
    component: FormularioComponent
  },
  {
    path: 'registrarlocalidades/:id',
    component: FormRegisterComponent
  },
  {
    path: 'SometerSolicitud/:id',
    component: NupreSometerSolicitudComponent
  },

  {
    path: '**',
    component: ListaSolicitudesComponent
  }


]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})


export class AppRoutingModule {
}

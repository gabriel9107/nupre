import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponet } from './footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { NupreInformacionBasicaComponent } from './solicitud/nupre-informacion-basica/nupre-informacion-basica.component';

import { DetalleBasicoComponent } from './solicitud/detalle-basico/detalle-basico.component';
import { SolicitudesFormComponent } from './solicitud/detalle-basico/solicitudes-form/solicitudes-form.component';
import { NupreRegistrarDocumentacionComponent } from './solicitud/nupre-registrar-documentacion/nupre-registrar-documentacion.component';
import { NupreSometerSolicitudComponent } from './solicitud/nupre-someter-solicitud/nupre-someter-solicitud.component';
import { AsociacionesComponent } from './solicitud/asociaciones/asociaciones.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { NuevaSolicitudComponent } from './solicitud/nueva-solicitud/nueva-solicitud.component';
import { FormularioSolicitudComponent } from './solicitud/formulario-solicitud/formulario-solicitud.component';
import { EditarFormularioSolicitudComponent } from './solicitud/editar-formulario-solicitud/editar-formulario-solicitud.component';
import { FormularioComponent } from './solicitud/asociaciones/formulario/formulario.component';
import { Listado_Solicitud_Medico } from './Models/Nupre/Listado_Solicitud_Medico';
import { ListaSolicitudesComponent } from './solicitud/lista-solicitudes/lista-solicitudes.component';
import { ToastrModule } from 'ngx-toastr';
import { LocalidadesComponent } from './solicitud/localidades/localidades.component';
import { FormRegisterComponent } from './solicitud/localidades/form-register/form-register.component';
import { NgxMaskModule } from 'ngx-mask';




@NgModule({
  declarations: [
    AppComponent, FooterComponet,
    ListaSolicitudesComponent,
    DetalleBasicoComponent,
    NuevaSolicitudComponent,
    SolicitudesFormComponent,
    NupreInformacionBasicaComponent,
    NupreRegistrarDocumentacionComponent,
    NupreSometerSolicitudComponent,
    AsociacionesComponent,
    FormularioSolicitudComponent,
    EditarFormularioSolicitudComponent,
    FormularioComponent,
    LocalidadesComponent,
    FormRegisterComponent


  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    BrowserAnimationsModule,
    InputTextModule,
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot()
  ],

  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

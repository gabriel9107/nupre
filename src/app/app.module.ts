import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponet } from './footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgIf } from '@angular/common';
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










@NgModule({
  declarations: [
    AppComponent, FooterComponet,
    DetalleBasicoComponent,
    NuevaSolicitudComponent,
    SolicitudesFormComponent,
    NupreInformacionBasicaComponent,
    NupreRegistrarDocumentacionComponent,
    NupreSometerSolicitudComponent,
    AsociacionesComponent,
    FormularioSolicitudComponent,
    EditarFormularioSolicitudComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgIf,
    ReactiveFormsModule,
    FormsModule,
    // NgSelectModule,
    BrowserAnimationsModule,
    InputTextModule
  ],

  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

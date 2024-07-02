import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponet } from './footer/footer.component';
import { SolicitudesModule } from './solicitud/solicitudes.module';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgIf } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent, FooterComponet
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, SolicitudesModule,
    HttpClientModule, NgIf

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

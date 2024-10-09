// import { Injectable } from '@angular/core';

// import { HttpClient } from '@angular/common/http';

// import { Observable } from 'rxjs';
// import { Historico, Solicitudes_Actividades_Progress, Solicitudes_Actividades_Trans_Set_ViewModel } from '../SolicitudActividades';
// import { urlNupre } from '../../environments/urls';
// import { actividad as activadesDict } from '../actividades';




// @Injectable({
//   providedIn: 'root'
// })
// export class ProgressBarService {

//   private _solicitud_Actividades_Progress: Solicitudes_Actividades_Progress[] = [];

//   actividadesRealizadas: number = 0;

//   get Actividades_Progress(): Solicitudes_Actividades_Progress[] {
//     return this._solicitud_Actividades_Progress;
//   }
//   get SolicitudSometida(): boolean {
//     return this.Actividades_Progress.find(
//       actividad => actividad.actividad_Numero == activadesDict.SometerSolicitud)?.actividad_Completada == 1
//   }

//   constructor(private http: HttpClient) { }


//   ReadActividadProgressBar(solicitud_Numero: number, solicitud_Tipo_Numero: number) {
//     return this.GetActividadProgressBar(solicitud_Numero, solicitud_Tipo_Numero)
//       .subscribe(resp => {
//         this._solicitud_Actividades_Progress = resp;
//         this.actividadesRealizadas = this._solicitud_Actividades_Progress.filter(actividad => actividad.actividad_Completada).length;
//       })
//   }
//   InsertActividadProgressBar(data: Solicitudes_Actividades_Trans_Set_ViewModel) {
//     return this.PostActividadProgressBar(data)
//       .subscribe(resp => {
//         this.ReadActividadProgressBar(data.solicitud_Numero, data.solicitud_Tipo_Numero);
//       })
//   }

//   GetHistorico(solicitud_Numero: number, solicitud_Tipo_Numero: number): Observable<[Historico[]]> {
//     return this.http.get<[Historico[]]>(urlNupre.master.GetHistorico + `solicitud_Numero=${solicitud_Numero}&solicitud_Tipo_Numero=${solicitud_Tipo_Numero}`);
//   }
//   GetActividadProgressBar(solicitud_Numero: number, solicitud_Tipo_Numero: number): Observable<Solicitudes_Actividades_Progress[]> {
//     return this.http.get<Solicitudes_Actividades_Progress[]>(urlNupre.ProgressBar.ProgressBar + solicitud_Numero + `&solicitudTipoNumero=${solicitud_Tipo_Numero}`);
//   }
//   PostActividadProgressBar(solicitudes_Actividades_Trans_Inserta: Solicitudes_Actividades_Trans_Set_ViewModel) {
//     return this.http.post(
//       urlNupre.master.PostProgressBar, solicitudes_Actividades_Trans_Inserta);
//   }

// }

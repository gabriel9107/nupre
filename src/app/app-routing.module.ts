import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/NUPRE',
    pathMatch: 'full'
  },
  {
    path: 'NUPRE',
    loadChildren: () => import('../app/solicitud/solicitudes.module').then(s => s.SolicitudesModule)
  },
  {
    path: 'AuditoresMedicos',
    redirectTo: 'www.google.com.do'
    // loadChildren: () => import('../app/solicitud/solicitudes.module').then(s => s.SolicitudesModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

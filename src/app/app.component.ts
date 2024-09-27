import { Component, OnInit } from '@angular/core';
import { User } from './auth/User';
import getUserInfo from './auth/JWT';
import { environment } from './environments/environment.desarrollo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {


    //pendiente de modificacion 

    this.user = getUserInfo()
  }
  title = 'NUPRE';

  user: User = null!
  ovLink: string = null!
  usuarioPrincipal: boolean = false;
  // currentApplicationVersion: string = environment.appVersion;
  loadProfile: boolean = false;

  validarUsuarioPrincipal() {
    this.user.roles.forEach(rol => {
      if (rol.Usuario_Rol_Numero == 8) {//"8" rol usuario principal
        this.usuarioPrincipal = true;
      }
    });

    this.usuarioPrincipal = true;
  }
  cerrarSesion() {
    document.location.href = `${environment.urlOficinaVirtualLogin}Sesion/LogOff`
  }
}

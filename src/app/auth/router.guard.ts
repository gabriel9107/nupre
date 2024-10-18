import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import getUserInfo from './JWT';
import { User } from './User';

@Injectable({
    providedIn: 'root'
})
export class RouterGuard implements CanActivate {

    public currentUser: User | undefined;
    public esEmpresa: boolean = false;

    constructor(private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        this.currentUser = this.user;
        this.esEmpresa = this.user.UsuarioRegistroPatronal > 0;


        if (!this.esEmpresa) {
            this.router.navigate(['']);
            return false;
        }

        return true;
    }

    get user() {
        return getUserInfo();
    }

}

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../environments/environment.desarrollo';
import { fakeAsync } from '@angular/core/testing';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        'X-App-Version': environment.appVersion,
      },

      //pendiente de mofificar y trabajar 
      withCredentials: false,
    })

    return next.handle(request);
  }
}

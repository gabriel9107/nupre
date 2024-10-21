import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { CacheService } from './cache.services';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
    constructor(private cacheService: CacheService) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (req.method !== 'GET') {
            // Solo caché las solicitudes GET
            return next.handle(req);
        }

        const cachedResponse = this.cacheService.get(req.url);
        if (cachedResponse) {
            // Si los datos están en caché, devuélvelos directamente
            console.log('cachedResponse', cachedResponse);
            return of(cachedResponse);
        }

        // Si no hay datos en caché, realiza la solicitud HTTP y guárdalos en caché
        return next.handle(req).pipe(
            tap((event) => {
                if (event instanceof HttpResponse) {
                    //console.log('cachedResponse server', req);

                    this.cacheService.set(req.url, event);

                    //console.log('cachedResponse vercache', this.cacheService.verCache());
                }
            })
        );
    }
}



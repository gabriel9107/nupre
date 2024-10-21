import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CacheService {
    private cache: { [url: string]: any } = {};

    constructor() { }

    // Obtener datos de la caché
    get(url: string): any {
        const cachedData = this.cache[url];
        if (cachedData) {
            return cachedData.data;
        }
        return null;
    }

    // Guardar datos en la caché
    set(url: string, data: any): void {
        const cachedData = {
            data: data,
            timestamp: new Date().getTime(),
        };
        this.cache[url] = cachedData;
        this.addToSessionStorage(url, cachedData);
    }

    // Guardar datos en sessionStorage
    private addToSessionStorage(key: string, data: any): void {
        sessionStorage.setItem(key, JSON.stringify(data));
    }

    // Eliminar datos de la caché y de sessionStorage
    remove(url: string): void {
        delete this.cache[url];
        sessionStorage.removeItem(url);
    }

    // Ver contenido de la caché
    verCache(): { [url: string]: any } {
        return this.cache;
    }

    // Limpiar la caché y sessionStorage
    clear(): void {
        this.cache = {};
        sessionStorage.clear();
    }
}

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class CacheService {
//   private cache: { [url: string]: any } = {};

//   constructor() {}

//   // Obtener datos de la caché
//   get(url: string): any {
//     return this.cache[url];
//   }

//   // Guardar datos en la caché
//   set(url: string, data: any): void {
//     this.cache[url] = data;
//   }

//    // Guardar datos en la caché
//    remove(url: string): void {
//     delete this.cache[url];
//   }

//    // Ver contenido de la caché
//    verCache(): { [url: string]: any } {
//     return this.cache;
//   }

//   // Limpiar la caché
//   clear(): void {
//     this.cache = {};
//   }
// }

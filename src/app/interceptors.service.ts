import { Injectable, inject } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// @Injectable()
// export abstract class HttpHandler {
//   abstract handle(req: HttpRequest<any>): Observable<HttpEvent<any>>;
// }

@Injectable()
export class I1 implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modified = req.clone({setHeaders: {'Custom-Header-1': '1'}});
    return next.handle(modified);
  }
}

@Injectable()
export class I2 implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modified = req.clone({ setHeaders: { 'Custom-Header-2': '2'}});
    return next.handle(modified);
  }
}

/*
The HttpClient module provided by Angular has two implementations of such services — HttpXhrBackend that uses XmlHttpRequest API and JsonpClientBackend that uses JSONP technique. HttpXhrBackend is used by default in HttpClient.
Angular defines an abstraction called HTTP (request) handler that is responsible for handling a request. 
*/

// http-handler.ts


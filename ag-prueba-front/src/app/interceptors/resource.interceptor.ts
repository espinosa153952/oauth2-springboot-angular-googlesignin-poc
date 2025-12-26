import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../services/token.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ResourceInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const startTime = Date.now();
    let intReq = request;
    const token = this.tokenService.getAccessToken();
    if(token != null && request.url.includes('resource')) {
      intReq = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)});
    }
    return next.handle(intReq).pipe(
      tap({
        finalize: () => {
          const elapsed = Date.now() - startTime;
          console.log(`Métrica KR (api%): ${request.url} tardó ${elapsed}ms`);
          // Aquí se enviaría a un colector como Grafana Faro o un endpoint de métricas
        }
      })
    );
  }
}
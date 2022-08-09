import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { TokenService } from '../_service/token.service';
import { ErrorService } from '../_service/error.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private tokenService: TokenService,
    private errorService: ErrorService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const acces_token = this.tokenService.getToken();
    console.log(acces_token);
    if (acces_token !== null) {
      let requestClone = request.clone({
        headers: request.headers.set('Authorization', 'bearer ' + acces_token),
      });
      console.log(requestClone);

      return next.handle(requestClone).pipe(
        // @ts-ignore
        catchError(err => {
          this.errorService.error(err.status);
          return of(err.status);
        })
      );
    }
    return next.handle(request);
  }
}
export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true,
};

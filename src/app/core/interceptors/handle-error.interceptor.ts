import { Injectable, ClassProvider } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HandleErrorInterceptor implements HttpInterceptor {
  private handleErrorResponse(error: HttpErrorResponse) {
    let errorMsg = '';

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      errorMsg = error.error.message;
    } else {
      // A backend error occured.
      errorMsg = error.error.msg;
    }
    return throwError(errorMsg);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(this.handleErrorResponse));
  }
}

export const HANDLE_ERROR_PROVIDER: ClassProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HandleErrorInterceptor,
  multi: true
};

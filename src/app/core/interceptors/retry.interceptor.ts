import { Injectable, ClassProvider } from '@angular/core';
import { retryWhen } from 'rxjs/operators';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { genericRetryStartegy, shouldRetryFn } from '@app/core/rxjs-utils';

@Injectable()
export class RetryInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { shouldRetry } = this;

    return next.handle(request).pipe(
      retryWhen(
        genericRetryStartegy({
          shouldRetry
        })
      )
    );
  }

  private shouldRetry: shouldRetryFn = (error) => error.status === 502;
}

export const RETRY_PROVIDER: ClassProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: RetryInterceptor,
  multi: true
};

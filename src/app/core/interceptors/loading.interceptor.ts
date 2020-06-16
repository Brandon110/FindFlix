import { Injectable, ClassProvider } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from '@app/core';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.showLoader();

    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.hideLoader();
          }
        },
        (error: any) => {
          this.hideLoader();
        }
      )
    );
  }

  private showLoader(): void {
    this.loadingService.show();
  }

  private hideLoader(): void {
    this.loadingService.hide();
  }
}

export const LOADING_PROVIDER: ClassProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: LoadingInterceptor,
  multi: true
};

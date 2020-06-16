import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { LoadingState } from '@app/shared/models/LoadingState';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingState = new Subject<LoadingState>();

  constructor() {}

  loadingInit(): Observable<LoadingState> {
    return this.loadingState.asObservable();
  }

  show() {
    this.loadingState.next(<LoadingState>{ show: true });
  }

  hide() {
    this.loadingState.next(<LoadingState>{ show: false });
  }
}

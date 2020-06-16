import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingService } from '@app/core';
import { Subscription } from 'rxjs';
import { LoadingState } from '@app/shared/models/LoadingState';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  styleUrls: ['./loader.component.scss'],
  template: `
    <div class="loader d-flex" *ngIf="loadingState">
      <i class="las la-spinner la-spin"></i>
    </div>
  `
})
export class LoaderComponent implements OnInit, OnDestroy {
  loadingSubscription: Subscription;
  loadingState = false;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingSubscription = this.loadingService
      .loadingInit()
      .pipe(debounceTime(200))
      .subscribe((state: LoadingState) => this.setLoadingState(state));
  }

  private setLoadingState(state: LoadingState): void {
    this.loadingState = state.show;
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from './import-guard';

import { LOADING_PROVIDER } from './interceptors/loading.interceptor';
import { RETRY_PROVIDER } from './interceptors/retry.interceptor';
import { HANDLE_ERROR_PROVIDER } from './interceptors/handle-error.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [LOADING_PROVIDER, RETRY_PROVIDER, HANDLE_ERROR_PROVIDER]
})
// Stop other modules from importing core.module
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

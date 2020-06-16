import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { HeaderModule } from './components/header/header.module';
import { NotFoundModule } from './components/not-found/not-found.module';
import { SearchResultsModule } from './components/search-results/search-results.module';

import { AppComponent } from './app.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { LoaderComponent } from './components/loading/loader.component';

@NgModule({
  declarations: [AppComponent, NotificationsComponent, LoaderComponent],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule, CoreModule, HeaderModule, SearchResultsModule, NotFoundModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

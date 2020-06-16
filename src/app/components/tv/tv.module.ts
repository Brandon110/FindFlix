import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ItemListScrollableModule } from '../item-list-scrollable/item-list-scrollable.module';
import { ItemListModule } from '../item-list/item-list.module';
import { TvRoutingModule } from './tv-routing.module.ts.module';
import { SingleModule } from '../single/single.module';

import { TvComponent } from './tv.component';
import { TvPopularListScrollableComponent } from './tv-popular-list-scrollable/tv-popular-list-scrollable.component';
import { TvTopRatedListScrollableComponent } from './tv-top-rated-list-scrollable/tv-top-rated-list-scrollable.component';
import { TvOnTheAirListScrollableComponent } from './tv-on-the-air-list-scrollable/tv-on-the-air-list-scrollable.component';
import { TvAiringTodayListScrollableComponent } from './tv-airing-today-list-scrollable/tv-airing-today-list-scrollable.component';
import { TvAiringTodayComponent } from './tv-airing-today.component';
import { TvOnTheAirComponent } from './tv-on-the-air.component';
import { TvPopularComponent } from './tv-popular.component';
import { TvTopRatedComponent } from './tv-top-rated.component';

@NgModule({
  declarations: [
    TvComponent,
    TvPopularListScrollableComponent,
    TvTopRatedListScrollableComponent,
    TvOnTheAirListScrollableComponent,
    TvAiringTodayListScrollableComponent,
    TvAiringTodayComponent,
    TvOnTheAirComponent,
    TvPopularComponent,
    TvTopRatedComponent
  ],
  imports: [CommonModule, RouterModule, ItemListScrollableModule, ItemListModule, TvRoutingModule, SingleModule],
  exports: [TvComponent]
})
export class TvModule {}

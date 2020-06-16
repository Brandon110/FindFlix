import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results.component';
import { ItemModule } from '../item/item.module';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { SearchItemsComponent } from './search-items/search-items.component';
import { SearchTvComponent } from './search-tv/search-tv.component';
import { GoBackModule } from '../go-back/go-back.module';
import { SearchResultsRoutingModule } from './search-results-routing.module';

@NgModule({
  declarations: [SearchResultsComponent, SearchMoviesComponent, SearchItemsComponent, SearchTvComponent],
  exports: [SearchResultsComponent],
  imports: [CommonModule, ItemModule, GoBackModule, SearchResultsRoutingModule]
})
export class SearchResultsModule {}

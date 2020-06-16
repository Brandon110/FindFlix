import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { ScrollableDirective } from './directives/scrollable.directive';

@NgModule({
  declarations: [ScrollableDirective],
  exports: [PipesModule, ScrollableDirective],
  imports: [CommonModule, PipesModule]
})
export class SharedModule {}

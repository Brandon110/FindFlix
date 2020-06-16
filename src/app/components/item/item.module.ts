import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ItemComponent } from './item.component';
import { SingleModule } from '../single/single.module';

@NgModule({
  declarations: [ItemComponent],
  exports: [ItemComponent],
  imports: [CommonModule, RouterModule, SingleModule]
})
export class ItemModule {}

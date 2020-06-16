import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListScrollableComponent } from './item-list-scrollable.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ItemModule } from '../item/item.module';
import { SingleModule } from '../single/single.module';

@NgModule({
  declarations: [ItemListScrollableComponent],
  exports: [ItemListScrollableComponent],
  imports: [CommonModule, RouterModule, SharedModule, SingleModule, ItemModule]
})
export class ItemListScrollableModule {}

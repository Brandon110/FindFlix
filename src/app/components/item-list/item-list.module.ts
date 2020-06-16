import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list.component';
import { ItemModule } from '../item/item.module';
import { GoBackModule } from '../go-back/go-back.module';
import { SingleModule } from '../single/single.module';

@NgModule({
  declarations: [ItemListComponent],
  exports: [ItemListComponent],
  imports: [CommonModule, SingleModule, ItemModule, GoBackModule]
})
export class ItemListModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { GoBackModule } from '../go-back/go-back.module';

@NgModule({
  declarations: [NotFoundComponent],
  exports: [NotFoundComponent],
  imports: [CommonModule, GoBackModule]
})
export class NotFoundModule {}

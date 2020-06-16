import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchFormComponent } from './search-form.component';
import { FormComponent } from './form/form.component';
import { MobileFormComponent } from './mobile-form/mobile-form.component';

@NgModule({
  declarations: [SearchFormComponent, FormComponent, MobileFormComponent],
  exports: [SearchFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class SearchFormModule {}

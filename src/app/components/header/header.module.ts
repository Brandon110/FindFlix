import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { PrimaryMenuComponent } from './primary-menu/primary-menu.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { MenusComponent } from './menus/menus.component';
import { SearchFormModule } from '../search-form/search-form.module';

@NgModule({
  declarations: [HeaderComponent, PrimaryMenuComponent, MobileMenuComponent, MenusComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, RouterModule, FormsModule, SearchFormModule]
})
export class HeaderModule {}

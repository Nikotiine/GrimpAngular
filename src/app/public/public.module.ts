import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PLayoutComponent } from './p-layout/p-layout.component';
import { PNavbarComponent } from './p-navbar/p-navbar.component';
import { PHomeComponent } from './p-home/p-home.component';
import { PseudoMailValidatorDirective } from '../_helpers/pseudo-mail-validator.directive';

@NgModule({
  declarations: [PLayoutComponent, PNavbarComponent, PHomeComponent],
  imports: [CommonModule, PublicRoutingModule],
})
export class PublicModule {}

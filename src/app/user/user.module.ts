import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ULayoutComponent } from './u-layout/u-layout.component';
import { UNavbarComponent } from './u-navbar/u-navbar.component';
import { UHomeComponent } from './u-home/u-home.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    ULayoutComponent,
    UNavbarComponent,
    UHomeComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

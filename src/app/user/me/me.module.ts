import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeRoutingModule } from './me-routing.module';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    IndexComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    MeRoutingModule
  ]
})
export class MeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { ValidateToastComponent } from './validate-toast/validate-toast.component';
import { ErrorsTaostComponent } from './errors-taost/errors-taost.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [ValidateToastComponent, ErrorsTaostComponent, NotFoundComponent],
  exports: [ValidateToastComponent, ErrorsTaostComponent],
  imports: [CommonModule, UtilsRoutingModule],
})
export class UtilsModule {}

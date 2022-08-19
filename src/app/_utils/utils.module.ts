import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { ValidateToastComponent } from './validate-toast/validate-toast.component';
import { ErrorsTaostComponent } from './errors-taost/errors-taost.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    ValidateToastComponent,
    ErrorsTaostComponent,
    NotFoundComponent,
    MapComponent,
  ],
  exports: [ValidateToastComponent, ErrorsTaostComponent, MapComponent],
  imports: [CommonModule, UtilsRoutingModule, LeafletModule],
})
export class UtilsModule {}

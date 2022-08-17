import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { CreateComponent } from './create/create.component';
import { AllComponent } from './all/all.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateSecteurComponent } from './create-secteur/create-secteur.component';
import { UtilsModule } from '../../_utils/utils.module';

@NgModule({
  declarations: [
    CreateComponent,
    AllComponent,
    DetailComponent,
    SearchComponent,
    CreateSecteurComponent,
  ],
  imports: [CommonModule, SiteRoutingModule, ReactiveFormsModule, UtilsModule],
})
export class SiteModule {}

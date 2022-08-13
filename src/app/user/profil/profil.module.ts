import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { MeComponent } from './me/me.component';
import { EditComponent } from './edit/edit.component';
import { StatComponent } from './stat/stat.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '../../auth/auth.module';
import { UtilsModule } from '../../_utils/utils.module';
import { ChangePswComponent } from './change-psw/change-psw.component';

@NgModule({
  declarations: [MeComponent, EditComponent, StatComponent, ChangePswComponent],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    ReactiveFormsModule,
    AuthModule,
    UtilsModule,
  ],
})
export class ProfilModule {}

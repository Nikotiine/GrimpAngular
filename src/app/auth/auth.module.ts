import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PseudoMailValidatorDirective } from '../_helpers/pseudo-mail-validator.directive';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, LogoutComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
  providers: [PseudoMailValidatorDirective],
})
export class AuthModule {}

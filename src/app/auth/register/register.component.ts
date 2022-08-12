import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../_service/register.service';
import { RegisterCredential } from '../../_models/user.model';
import { TokenService } from '../../_service/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  isInvalid: boolean = false;
  errorMessage: string = '';

  constructor(
    private registerService: RegisterService,
    private tokenService: TokenService
  ) {
    this.registerForm = new FormGroup({
      nickName: new FormControl('', [Validators.required, Validators.max(50)]),
      lastName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required),
    });
  }

  register() {
    const credentials: RegisterCredential = new RegisterCredential(
      this.registerForm.controls['nickName'].value,
      this.registerForm.controls['lastName'].value,
      this.registerForm.controls['firstName'].value,
      this.registerForm.controls['email'].value,
      this.registerForm.controls['password'].value,
      this.registerForm.controls['birthday'].value,
      this.registerForm.controls['sex'].value
    );
    this.registerService.register(credentials).subscribe({
      next: data => {
        this.tokenService.saveToken(data.acces_token, data.idUser);
      },
      error: err => {
        this.isInvalid = true;
        setTimeout(() => {
          this.isInvalid = false;
        }, 3000);
        this.errorMessage = err.error.text;
      },
    });
  }
}

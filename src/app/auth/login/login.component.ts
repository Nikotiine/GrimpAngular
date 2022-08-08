import { Component } from '@angular/core';
import { LoginService } from '../../_service/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILogin } from '../../_models/i-login';
import { TokenService } from '../../_service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private tokenService: TokenService
  ) {
    this.loginForm = new FormGroup({
      nickName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    const credential: ILogin = {
      nickName: this.loginForm.controls['nickName'].value,
      password: this.loginForm.controls['password'].value,
    };
    this.loginService.login(credential).subscribe({
      next: data => {
        this.tokenService.saveToken(data.acces_token, data.idUser);
      },
      error: err => {
        console.log(err);
      },
    });
  }
}

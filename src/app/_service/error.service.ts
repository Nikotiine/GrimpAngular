import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private router: Router, private tokenService: TokenService) {}

  public error(errId: number) {
    if (errId === 403) {
      this.tokenService.clearToken();
      this.router.navigate(['auth/login']);
    } else {
      this.router.navigate(['']);
    }
  }
}

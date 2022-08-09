import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private router: Router) {}

  public error(errId: number) {
    if (errId === 403 || errId === 404 || errId === 504) {
      this.router.navigate(['error/' + errId]);
    } else {
      this.router.navigate(['']);
    }
  }
}

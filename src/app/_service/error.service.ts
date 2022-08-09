import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private router: Router) {}

  public error(errId: number) {
    this.router.navigate(['error/' + errId]);
  }
}

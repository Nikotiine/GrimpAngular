import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private url: string = 'user';
  constructor(private router: Router) {}
  saveToken(token: string, idUser: number): void {
    localStorage.setItem('token', token);
    localStorage.setItem('id', String(idUser));
    this.router.navigate([this.url]);
  }
  isLogged(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private urlLogin: string = 'user';
  private urlLogout: string = '';
  constructor(private router: Router) {}
  saveToken(token: string, idUser: number): void {
    localStorage.setItem('token', token);
    localStorage.setItem('id', String(idUser));
    this.router.navigate([this.urlLogin]);
  }
  isLogged(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  clearToken() {
    localStorage.clear();
    this.router.navigate([this.urlLogout]);
  }
}

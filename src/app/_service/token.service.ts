import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}
  saveToken(token: string, idUser: number): void {
    localStorage.setItem('token', token);
    localStorage.setItem('id', String(idUser));
  }
  isLogged(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}

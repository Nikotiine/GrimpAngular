import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EditCredential, User } from '../_models/user.model';
import { IChangePsw } from '../_models/i-change-psw';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private urlGetProfil: string = 'api/user/me/';
  private urlEditProfil: string = 'api/user/edit/';
  private urlChangePsw: string = 'api/user/new-password/';
  private urlLogout: string = '';
  private urlLogin: string = 'auth/login';
  constructor(private http: HttpClient, private router: Router) {}

  getProfil(idUser: number): Observable<User> {
    return this.http.get<User>(this.urlGetProfil + idUser);
  }
  editProfil(idUser: number, credential: EditCredential): Observable<User> {
    console.log('edit profil');
    return this.http.put<User>(this.urlEditProfil + idUser, credential);
  }
  changePsw(idUser: number, credential: IChangePsw) {
    console.log('change password');
    return this.http.put<any>(this.urlChangePsw + idUser, credential);
  }
  logout() {
    this.router.navigate([this.urlLogout]);
  }
  login() {
    this.router.navigate([this.urlLogin]);
  }
}

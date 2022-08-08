import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser, User } from '../_models/user.model';
import { toNumbers } from '@angular/compiler-cli/src/version_helpers';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private urlGetProfil: string = 'api/user/me/';
  private idUser: number = Number(localStorage.getItem('id'));
  constructor(private http: HttpClient) {}

  getProfil(): Observable<User> {
    return this.http.get<User>(this.urlGetProfil + this.idUser);
  }
}

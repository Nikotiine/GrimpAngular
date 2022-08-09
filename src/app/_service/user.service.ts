import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private urlGetProfil: string = 'api/user/me/';

  constructor(private http: HttpClient) {}

  getProfil(idUser: number): Observable<User> {
    return this.http.get<User>(this.urlGetProfil + idUser);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../_models/i-login';
import { IToken } from '../_models/i-token';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url: string = 'api/login';
  constructor(private http: HttpClient) {}

  public login(credential: ILogin): Observable<IToken> {
    return this.http.post<IToken>(this.url, credential);
  }
}

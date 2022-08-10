import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../_models/user.model';
import { Observable } from 'rxjs';
import { IToken } from '../_models/i-token';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private urlRegister: string = 'api/register';

  constructor(private http: HttpClient) {}

  public register(credentials: IUser): Observable<IToken> {
    console.log(credentials);
    return this.http.post<IToken>(this.urlRegister, credentials);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IListPseudoMail } from '../_models/i-pseudo-mail-validator';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  private getAllPseudoAndMailUrl: string = 'api/public/validator';
  constructor(private http: HttpClient) {}

  getAllPseudoAndMail(): Observable<IListPseudoMail[]> {
    return this.http.get<IListPseudoMail[]>(this.getAllPseudoAndMailUrl);
  }
}

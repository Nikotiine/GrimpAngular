import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ICategorie } from '../_models/i-categorie';

@Injectable({
  providedIn: 'root',
})
export class SiteService {
  private getAllDetailUrl: string = 'api/spot';
  constructor(private http: HttpClient) {}

  getAllDetail(): Observable<ICategorie> {
    return this.http.get<ICategorie>(this.getAllDetailUrl);
  }
}

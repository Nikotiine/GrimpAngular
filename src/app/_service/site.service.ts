import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ICategorie } from '../_models/i-categorie';
import { ISite, SiteCredential } from '../_models/i-site';
import { IResponseId } from '../_models/i-response';

@Injectable({
  providedIn: 'root',
})
export class SiteService {
  private getAllDetailUrl: string = 'api/spot';
  private getAllSiteUrl: string = 'api/spot/all';
  private getAllSpotNameUrl: string = 'api/spot/names';
  private createSpotUrl: string = 'api/spot/new/';
  private getSpotDetailUrl: string = 'api/spot/index/';
  private idUser: number = Number(localStorage.getItem('id'));
  constructor(private http: HttpClient) {}

  getAllDetail(): Observable<ICategorie> {
    return this.http.get<ICategorie>(this.getAllDetailUrl);
  }
  create(credentails: SiteCredential) {
    return this.http.post<IResponseId>(
      this.createSpotUrl + this.idUser,
      credentails
    );
  }
  getAllSite(): Observable<ISite[]> {
    return this.http.get<ISite[]>(this.getAllSiteUrl);
  }
  getSpotDetail(idSpot: number): Observable<ISite> {
    return this.http.get<ISite>(this.getSpotDetailUrl + idSpot);
  }
  getAllSpotName(): Observable<string[]> {
    return this.http.get<string[]>(this.getAllSpotNameUrl);
  }
}
